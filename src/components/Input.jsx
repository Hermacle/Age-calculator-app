function Input({label,idValue,errorEmpty,errorInvalid,errorWhole}){
  return(
    <>
    <label htmlFor={idValue}>{label}</label> <br />
    <input type="number" id={idValue}/>
    <p>{errorEmpty}</p>
    <p>{errorInvalid}</p>
    <p>{errorWhole}</p>
    </>
  )
}
export default Input;