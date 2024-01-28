function Error({id,errorText}){
  return(
    <p className="error" id={id}>{errorText}</p>
  )
}
export default Error;