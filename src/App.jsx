import './styles/App.css'
import Input from './components/Input'

function App() {
  return (
    <div>
      <h1>Age Calculator React App</h1>
      <form action="">
      <Input label="Day" idValue="day" errorEmpty="error Empty" errorInvalid="error Invalid" errorWhole="error Whole"/>
      <Input label="Month" idValue="month" errorEmpty="error Empty" errorInvalid="error Invalid" errorWhole="error Whole" />
      <Input label="Year" idValue="year" errorEmpty="error Empty" errorInvalid="error Invalid" errorWhole="error Whole"/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
