
function Input({ label, id,value, max, min, maxlength, placeholder,onChange }) {
  return (
    <>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        className="form-input"
        type="number"
        id={id}
        value={value}
        max={max}
        min={min}
        maxlength={maxlength}
        placeholder={placeholder} onChange={onChange} />
    </>
  )
}
export default Input;