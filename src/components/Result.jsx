function Result({ result, text,id }) {
  return (
    <div className="results-line">
      <p className="results-text" id={id}>{result}</p>
      <p className="results-text results-label">{text}</p>
    </div>
  )

}
export default Result;