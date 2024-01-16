function ResetButton ({callback}) {

  const buttonStyle = {
    backgroundColor: 'lightgreen'
  }

  return (<div>
      <button style={buttonStyle} onClick={callback}>Reset</button>
  </div>)
}

export default ResetButton;