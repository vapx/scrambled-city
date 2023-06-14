const Alert = props => {
  return (
    <p className={props.className} role="alert">
      {props.errorMessage}
    </p>
  )
}

export default Alert
