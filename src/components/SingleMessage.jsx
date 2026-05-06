export const SingleMessage = (props) => {
  return (
    <div className="message">
      <div className="message-header">
        <p>{props.singleMessage.message}</p>
      </div>
    </div>
  )
}
