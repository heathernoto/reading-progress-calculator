import  { useState } from 'react';
import { calculateResults } from './utils';
import './ReadingCalculator.css';

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

  const results = calculateResults(readingData);

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
            <h3 style={{ marginTop: 0, marginBottom: '.25rem' }}>Assessment Summary</h3>
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
