import { calculateResults } from "./utils";
import {describe, it, expect, beforeEach} from 'vitest'

describe('calculateResults', ()=> {
  let readingData: Record<string, any>

  beforeEach(()=> {
    readingData= {
      totalWordsRead: '100',
      totalErrors: '2',
      totalSelfCorrections: '2'
    }
  })

  it('should return correct accuracy rate', ()=> {
    const result = calculateResults(readingData)
    expect(result!.accuracy).toBe('98.0')
  })

  it('should return correct error rate', ()=> {
    const result = calculateResults(readingData)
    expect(result!.errorRate).toBe('50')
  })

  it('should return correct selfCorrectionRate', ()=> {
    const result = calculateResults(readingData)
    expect(result!.scRate).toBe('2')
  })

  it('should return correct Independent levelText and levelClass', ()=> {
    const result = calculateResults(readingData)
    expect(result!.levelText).toBe('Independent')
    expect(result!.levelClass).toBe('level-independent')
  })

  it('should return correct Instructional levelText and levelClass', ()=> {
    readingData.totalErrors = '6'
    const result = calculateResults(readingData)
    expect(result!.levelText).toBe('Instructional')
    expect(result!.levelClass).toBe('level-instructional')
  })

  it('should return correct Frustrational levelText and levelClass', ()=> {
    readingData.totalErrors = '12'
    const result = calculateResults(readingData)
    expect(result!.levelText).toBe('Frustrational')
    expect(result!.levelClass).toBe('level-frustrational')
  })
})
