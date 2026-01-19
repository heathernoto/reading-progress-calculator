// src/utils.test.js
import { describe, it, expect } from 'vitest';
import {accuracyRate, selfCorrectionRate} from './utils.ts'

describe('runningRecordsAccuracyRate', () => {
  it('should calculate accuracy rate', () => {
    expect(accuracyRate(100, 5)).toBe(95)
  });
});

describe('self-correction rate', () => {
  it('should calculate self-correctionrate', () => {
    expect(selfCorrectionRate(5, 2)).toBe(3.5)
  });
});
