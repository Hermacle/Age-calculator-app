function Input({ label, id, value, max, min, maxlength, placeholder, onChange, error }) {
  return (
    <>
      <label className={`form-label ${error ? 'errorLabel' : ''}`} htmlFor={id}>{label}</label>
      <input
        className={`form-input ${error ? 'errorInput' : ''}`}
        type="number"
        id={id}
        value={value}
        max={max}
        min={min}
        maxLength={maxlength}
        placeholder={placeholder} 
        onChange={onChange} />
    </>
  )
}
export default Input;
