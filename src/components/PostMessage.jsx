import { useState } from "react"

export const PostMessage = ({onPostSuccess}) => {

  const [message, setMessage] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("handleFormSubmit called")
  }
  
  return (
    <div className="post-wrapper">
      <p>What's making you happy right now?</p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="3"
          placeholder="Write your message here..."
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          type="submit"
          aria-label="button for submitting your post"
        >
          <span
            className="emoji"
            aria-label="like button">
            &#x2665;
          </span>
          Send message
          <span
            className="emoji"
            aria-label="like button">
            &#x2665;
          </span>
        </button>
      </form>
    </div>
  )
}
