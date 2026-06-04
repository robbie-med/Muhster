export function riskScore(likelihood: number, impact: number): number {
  return likelihood * impact;
}

export function riskLevel(score: number): 'low' | 'watch' | 'elevated' | 'high' | 'critical' {
  if (score <= 4) return 'low';
  if (score <= 9) return 'watch';
  if (score <= 14) return 'elevated';
  if (score <= 19) return 'high';
  return 'critical';
}
