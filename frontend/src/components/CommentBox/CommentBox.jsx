import React, { useState, useEffect } from 'react';
import './CommentBox.css'
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const CommentBox = ({videoId}) => {
  const [comment, setComment] = useState('') 
  const [comments, setComments] = useState([])

  const [user, token] = useAuth()

  useEffect(async() => {
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}`)
      const videoComments = response.data
      setComments(videoComments)
  },[])

  async function postComment(event){
    event.preventDefault()
    const body = {
      video_id: videoId,
      text: comment,
      likes: 0,
      dislikes: 0
    }
    const response = await axios.post('http://127.0.0.1:8000/api/comments/', body, { headers: { 'Authorization': `Bearer ${token}` } })
    return response
  }
  
  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  return (
    <div class='comment-box'>
      <label>Comments </label>
      {user && (<form onSubmit={(event) => postComment(event)}>
        <input type='text' onChange={(event) => handleCommentChange(event)}></input>
        <button onClick={postComment}>Post Your Comment</button>
      </form>)}
      <ul style={{display: 'block'}}>
        {comments?.map((comment) => (
          <>
            <li>{comment.text}</li> 
          </>
        ))}
      </ul>
    </div>
  )
}

export default CommentBox;