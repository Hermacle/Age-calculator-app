import React, { useState } from 'react';

import './styles/App.css';
import './styles/ageCard.css';
import './styles/mobilePoint.css';

import Input from './components/Input';
import Result from './components/Result';
import Error from './components/Error';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [ageYears, setAgeYears] = useState('--');
  const [ageMonths, setAgeMonths] = useState('--');
  const [ageDays, setAgeDays] = useState('--');

  const calculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      months--;
      days = prevMonthLastDay - birthDate.getDate() + today.getDate();
    }

    setAgeYears(years);
    setAgeMonths(months);
    setAgeDays(days);
  };

  return (
    <div>
      <main className="calculator-card">
        {/* Input Bar */}
        <div className="input-bar">
          <div className="day-input">
            <Input label="day" id="day" max="31" min="1" maxLength="2" placeholder="DD" value={day}
              onChange={(e) => setDay(e.target.value)} />
            <Error id="day-error" errorText="Must be a valid day" />
          </div>
          <div className="month-input">
            <Input label="month" id="month" max="12" min="1" maxLength="2" placeholder="MM" value={month}
              onChange={(e) => setMonth(e.target.value)} />
            <Error id="month-error" errorText="Must be a valid month" />
          </div>
          <div className="year-input">
            <Input label="year" id="year" min="100" maxLength="4" placeholder="YYYY" value={year}
              onChange={(e) => setYear(e.target.value)} />
            <Error id="year-error" errorText="Must be a valid year" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-bar">
          <button id="submit" className="submit-arrow" onClick={calculateAge}>
            <img id="arrow-icon" src="src/assets/images/icon-arrow.svg" alt="arrow icon"/>
          </button>
          <div className="bar"></div>
        </div>

        {/* Results-Box */}
        <div className="results-box">
          <Result result={ageYears} text="years" id="result-years" />
          <Result result={ageMonths} text="months" id="result-months" />
          <Result result={ageDays} text="days" id="result-days" />
        </div>
      </main>
    </div>
  );
}

export default App;
