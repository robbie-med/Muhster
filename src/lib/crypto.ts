export type EncryptedPayload = {
  ciphertext: string;
  nonce: string;
};

export interface CryptoProvider {
  encryptString(plaintext: string, context: string): Promise<EncryptedPayload>;
  decryptString(payload: EncryptedPayload, context: string): Promise<string>;
}

function toBase64(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes));
}

function fromBase64(value: string): Uint8Array {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

async function deriveDemoKey(context: string): Promise<CryptoKey> {
  const material = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`muster-demo:${context}`));
  return crypto.subtle.importKey('raw', material, 'AES-GCM', false, ['encrypt', 'decrypt']);
}

export const browserDemoCryptoProvider: CryptoProvider = {
  async encryptString(plaintext, context) {
    const nonce = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveDemoKey(context);
    const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, key, new TextEncoder().encode(plaintext));
    return { ciphertext: toBase64(new Uint8Array(encrypted)), nonce: toBase64(nonce) };
  },
  async decryptString(payload, context) {
    const key = await deriveDemoKey(context);
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromBase64(payload.nonce) }, key, fromBase64(payload.ciphertext));
    return new TextDecoder().decode(decrypted);
  }
};
