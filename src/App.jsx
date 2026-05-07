import { useState, useEffect } from "react"
import { MessageList } from "./components/MessageList"
import { PostMessage } from "./components/PostMessage"
import { BASE_URL } from "./api"

export const App = () => {
 
  // This state is just for testing purposes.
  // The messages should come from the API instead.
  const [messageList, setMessageList] = useState([
    
  ])

  const fetchPosts = () => {
    fetch(`${BASE_URL}/messages`)
      .then((response) => response.json())
      .then((data) => {
        setMessageList(data)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])
    
  return (
    <>
      <PostMessage onPostSuccess={fetchPosts} />
      <MessageList messageList={messageList} />
    </>
  )
}
