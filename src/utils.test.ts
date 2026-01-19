// src/utils.test.js
import { describe, it, expect } from 'vitest';
import {runningRecordsAccuracyRate} from './utils.ts'

describe('runningRecordsAccuracyRate', () => {
  it('should calculate running records accuracy rate', () => {
    expect(runningRecordsAccuracyRate(40, 20)).toBe(100)
  });
});
