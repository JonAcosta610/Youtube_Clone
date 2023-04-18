import React, { useState, useEffect } from 'react';
import './CommentBox.css'
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const CommentBox = ({videoId}) => {
  const [comment, setComment] = useState('') 
  const [comments, setComments] = useState([])

  const [user] = useAuth()

  useEffect(async() => {
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}`
      )
      const {items} = response.data
      setComments(items)
  },[])

  async function postComment(event){
      event.preventDefault()
      await axios.post(`http://127.0.0.1:8000/api/comments/`, {
        "video_id": videoId,
        "text": comment,
        "likes": 0,
        "dislikes": 0
      })
    }
  
  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }
  
  return (
    <div class='comment-box'>
      <label>Comments </label>
      {user && (<form>
        <input type='text' onChange={(event) => handleCommentChange(event)}></input>
        <button onClick={(event) => postComment}>Post Your Comment</button>
      </form>)}
      <ul>
        {comments?.map((comment) => (
          <li>{comment.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default CommentBox;