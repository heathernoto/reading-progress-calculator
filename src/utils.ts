export const runningRecordsAccuracyRate = (totalWordsRead: number, totalErrors: number):number=> {
  return (totalWordsRead - totalErrors)/ totalWordsRead * 100
}

/*
Calculate accuracy rate
Total Words Read - Total Errors/ Total Words Read x 100
*/
