import './styles/App.css'
import './styles/ageCard.css'
import './styles/mobilePoint.css'

import Input from './components/Input'
import Result from './components/Result'
import Error from './components/Error'

function App() {
  return (
    <div>
     
      <main class="age-calc-box">

        {/* Input Bar */}
        <div class="input-bar">
          <div class="day-input">
            <Input label="day" id="day" max="31" min="1" maxlength="2" placeholder="DD" />
            <Error id="day-error" errorText="Must be a valid day" />
          </div>
          <div class="month-input">
            <Input label="month" id="month" max="12" min="1" maxlength="2" placeholder="MM" />
            <Error id="month-error" errorText="Must be a valid month" />
          </div>
          <div class="year-input">
            <Input label="month" id="year" min="100" maxlength="4" placeholder="YYYY" />
            <Error id="year-error" errorText="Must be a valid year" />
          </div>
        </div>

        {/* Submit Button */}
        <div class="submit-bar">
          <button id="submit" class="submit-arrow" disabled>
            <img id="arrow-icon" src="src/assets/images/icon-arrow.svg" /> 
          </button>
          <div class="bar"></div>
        </div>

        {/* Results-Box */}
        <div className="results-box">
          <Result result="--" text="years" id="result-years" />
          <Result result="--" text="months" id="result-months" />
          <Result result="--" text="days" id="result-days" />
        </div>
      </main>
    </div>
  )
}

export default App;
