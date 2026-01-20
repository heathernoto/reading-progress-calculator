/*
Accuracy Rate(percentage)
((Total Words Read - Total Errors) / Total Words Read x 100
*/
export const accuracyRate = (totalWordsRead: number, totalErrors: number):string=> {
  return `${Math.round(((totalWordsRead - totalErrors)/ totalWordsRead) * 100)}%`
}

/*
Error Rate(ratio)
((Total Words Read - Total Errors) / Total Words Read x 100
*/
export const errorRate = (totalWordsRead: number, totalErrors: number):string=> {
  return  `1:${Math.round(totalWordsRead/totalErrors)}`
}

/*
Self Correction (Ratio)
(Total Errors + Total Self-Corrections) / Total Self-Corrections
*/
export const selfCorrectionRate = (totalErrors: number, totalSelfCorrections: number): string => {
  return `1:${Math.round(((totalErrors + totalSelfCorrections) / totalSelfCorrections))}`
}
