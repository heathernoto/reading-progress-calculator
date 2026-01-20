// src/utils.test.js
import { describe, it, expect } from 'vitest';
import {accuracyRate, errorRate, selfCorrectionRate} from './utils.ts'

describe('Accuracy Rate', () => {
  it('should calculate accuracy rate', () => {
    expect(accuracyRate(100, 5)).toBe('95%')
    expect(accuracyRate(99, 8)).toBe('92%')
  });
});

describe('Error Rate', () => {
  it('should calculate error rate', () => {
    expect(errorRate(99, 8)).toBe('1:12')
  });
});

describe('Self-Correction Rate', () => {
  it('should calculate self-correctionrate', () => {
    expect(selfCorrectionRate(5, 2)).toBe('1:4')
  });
});
