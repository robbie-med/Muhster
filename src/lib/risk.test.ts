import { describe, expect, it } from 'vitest';
import { riskLevel, riskScore } from './risk';

describe('risk scoring', () => {
  it('multiplies likelihood by impact', () => {
    expect(riskScore(4, 5)).toBe(20);
  });

  it('maps scores to operational levels', () => {
    expect(riskLevel(4)).toBe('low');
    expect(riskLevel(9)).toBe('watch');
    expect(riskLevel(14)).toBe('elevated');
    expect(riskLevel(19)).toBe('high');
    expect(riskLevel(25)).toBe('critical');
  });
});
