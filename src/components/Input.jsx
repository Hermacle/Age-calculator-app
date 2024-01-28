
function Input({ label, id, max, min, maxlength, placeholder }) {
  return (
    <>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        className="form-input"
        type="number"
        id={id}
        max={max}
        min={min}
        maxlength={maxlength}
        placeholder={placeholder} />
    </>
  )
}
export default Input;