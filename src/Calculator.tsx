import  { useState } from 'react';
import './Calculator.css'; // Import the CSS file

const ReadingCalculator = () => {
  const initialState = {
    totalWordsRead: '',
    totalErrors: '',
    totalSelfCorrections: ''
  };

  const [readingData, setReadingData] = useState(initialState);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setReadingData({ ...readingData, [name]: value });
  };

  const handleReset = () => {
    setReadingData(initialState);
  };

  const calculateResults = () => {
    const W = parseFloat(readingData.totalWordsRead) || 0;
    const E = parseFloat(readingData.totalErrors) || 0;
    const SC = parseFloat(readingData.totalSelfCorrections) || 0;

    if (W === 0) return null;

    const accuracy = (((W - E) / W) * 100).toFixed(1);
    const errorRate = E === 0 ? 0 : (W / E).toFixed(0);
    const scRate = SC === 0 ? 0 : ((E + SC) / SC).toFixed(0);

    let levelClass = "level-instructional";
    let levelText = "Instructional";

    if (typeof accuracy==='number' && accuracy >= 95) {
      levelClass = "level-independent";
      levelText = "Independent";
    } else if (typeof accuracy==='number' && accuracy < 90) {
      levelClass = "level-frustrational";
      levelText = "Frustrational";
    }

    return { accuracy, errorRate, scRate, levelText, levelClass };
  };

  const results = calculateResults();

  return (
    <div className="assessment-container">
      <div className="assessment-card">
        <div className="form-group">
          <div>
            <label className="input-label">Total Words Read</label>
            <input type="number" name="totalWordsRead" value={readingData.totalWordsRead} onChange={handleChange} className="input-field" placeholder="e.g. 100" />
          </div>
          <div>
            <label className="input-label">Total Errors</label>
            <input type="number" name="totalErrors" value={readingData.totalErrors} onChange={handleChange} className="input-field" placeholder="0" />
          </div>
          <div>
            <label className="input-label">Total Self Corrections</label>
            <input type="number" name="totalSelfCorrections" value={readingData.totalSelfCorrections} onChange={handleChange} className="input-field" placeholder="0" />
          </div>
        </div>

        {results && (
          <div className="results-box">
            <h3 style={{ marginTop: 0 }}>Assessment Summary</h3>
            <div className="results-grid">
              <span>Accuracy Rate:</span>
              <span className={`result-value ${results.levelClass}`}>{results.accuracy}%</span>

              <span>Error Rate:</span>
              <span className="result-value">1:{results.errorRate}</span>

              <span>SC Rate:</span>
              <span className="result-value">1:{results.scRate}</span>

              <span>Reading Level:</span>
              <span className={`result-value ${results.levelClass}`}>{results.levelText}</span>
            </div>
          </div>
        )}
        <div className="button-group">
          <button onClick={handleReset} className="btn">Reset Fields</button>
        </div>
      </div>
    </div>
  );
};

export default ReadingCalculator;
