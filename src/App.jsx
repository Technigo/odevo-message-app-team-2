import { useState } from "react"
import { MessageList } from "./components/MessageList"
import { PostMessage } from "./components/PostMessage"

export const App = () => {
  // This state is just for testing purposes.
  // The messages should come from the API instead.
  const [messageList, setMessageList] = useState([
    {_id: "123", message: "This is a message"},
    {_id: "456", message: "This is another message"}
  ])

  const fetchPosts = () => {
    console.log("fetchPosts called")
  }
    
  return (
    <>
      <PostMessage />
      <MessageList messageList={messageList} />
    </>
  )
}
