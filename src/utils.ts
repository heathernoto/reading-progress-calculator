export const calculateResults = (readingData: Record<string,any>) => {
  const words = parseFloat(readingData.totalWordsRead) || 0;
  const errors = parseFloat(readingData.totalErrors) || 0;
  const corrections = parseFloat(readingData.totalSelfCorrections) || 0;

  if (words === 0) return null;

  const accuracy = (((words - errors) / words) * 100).toFixed(1);
  const errorRate = errors === 0 ? 0 : (words / errors).toFixed(0);
  const scRate = corrections === 0 ? 0 : ((errors + corrections) / corrections).toFixed(0);

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


