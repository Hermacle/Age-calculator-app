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
  const [errorTextDay, setErrorTextDay] = useState('');
  const [errorTextMonth, setErrorTextMonth] = useState('');
  const [errorTextYear, setErrorTextYear] = useState('');

  // Function to determine the number of days in a month
  const daysInTheMonth = (month) => {
    if ([1, 3, 5, 7, 8, 10, 12].includes(parseInt(month))) {
      return 31;
    } else if ([4, 6, 9, 11].includes(parseInt(month))) {
      return 30;
    } else {
      const daysValue = parseInt(year) % 4 === 0 ? 29 : 28;
      return daysValue;
    }
  };

  // Function to validate input fields and display error messages
  const validateFields = () => {
    let isValid = true;

    if (day === '') {
      setErrorTextDay('This field is required');
      isValid = false;
    } else if (parseInt(day) < 1 || parseInt(day) > 31) {
      setErrorTextDay('Invalid Day');
      isValid = false;
    } else {
      setErrorTextDay('');
    }

    if (month === '') {
      setErrorTextMonth('This field is required');
      isValid = false;
    } else if (parseInt(month) < 1 || parseInt(month) > 12) {
      setErrorTextMonth('Invalid Month');
      isValid = false;
    }
    else if (parseInt(year) == new Date().getFullYear() && parseInt(month) == new Date().getMonth() + 1 && parseInt(day) > new Date().getDate()) {
      setErrorTextDay('Invalid date');
      isValid = false;
    } else if (parseInt(year) == new Date().getFullYear() && parseInt(month) > new Date().getMonth() + 1) {
      setErrorTextMonth('Invalid date');
      isValid = false;
    }
    else {
      setErrorTextMonth('');
    }

    if (year === '') {
      setErrorTextYear('This field is required');
      isValid = false;
    } else if (parseInt(year) < 100) {
      setErrorTextYear('Must be a valid year');
      isValid = false;
    }else if (parseInt(year) > new Date().getFullYear()) {
      setErrorTextYear('Must be in the past');
      isValid = false;
    } else {
      setErrorTextYear('');
    }

    if (parseInt(day) > daysInTheMonth(month)) {
      setErrorTextDay('Invalid date');
      isValid = false;
    }

    return isValid;
  };

  // Function to calculate the age 
  const calculateAge = () => {
    if (!validateFields()) {
      return;
    }

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

    // Set the calculated age values in the state variables
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
              onChange={(e) => setDay(e.target.value)} error={errorTextDay !== ''} />
            <Error id="day-error" errorText={errorTextDay} />
          </div>
          <div className="month-input">
            <Input label="month" id="month" max="12" min="1" maxLength="2" placeholder="MM" value={month}
              onChange={(e) => setMonth(e.target.value)} error={errorTextMonth !== ''} />
            <Error id="month-error" errorText={errorTextMonth} />
          </div>
          <div className="year-input">
            <Input label="year" id="year" min="100" maxLength="4" placeholder="YYYY" value={year}
              onChange={(e) => setYear(e.target.value)} error={errorTextYear !== ''} />
            <Error id="year-error" errorText={errorTextYear} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-bar">
          <button id="submit" className="submit-arrow" onClick={calculateAge}>
            <img id="arrow-icon" src="src/assets/images/icon-arrow.svg" alt="arrow icon" />
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
