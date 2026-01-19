/*
Accuracy Rate(percentage)
((Total Words Read - Total Errors) / Total Words Read x 100
*/
export const accuracyRate = (totalWordsRead: number, totalErrors: number):number=> {
  return ((totalWordsRead - totalErrors)/ totalWordsRead) * 100
}

/*
Self Correction (Ratio)
(Total Errors + Total Self-Corrections) / Total Self-Corrections
*/
export const selfCorrectionRate = (totalErrors: number, totalSelfCorrections: number): number => {
  return ((totalErrors + totalSelfCorrections) / totalSelfCorrections)
}
