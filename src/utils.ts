export const calculateResults = (readingData:any) => {
  const W = parseFloat(readingData.totalWordsRead) || 0;
  const E = parseFloat(readingData.totalErrors) || 0;
  const SC = parseFloat(readingData.totalSelfCorrections) || 0;

  if (W === 0) return null;

  const accuracy = (((W - E) / W) * 100).toFixed(1);
  const errorRate = E === 0 ? 0 : (W / E).toFixed(0);
  const scRate = SC === 0 ? 0 : ((E + SC) / SC).toFixed(0);

  let levelClass = "level-instructional";
  let levelText = "Instructional";

  if (Number(accuracy) >= 95) {

    levelClass = "level-independent";
    levelText = "Independent";
  } else if (Number(accuracy) < 90) {
    levelClass = "level-frustrational";
    levelText = "Frustrational";
  }

  return { accuracy, errorRate, scRate, levelText, levelClass };
};


