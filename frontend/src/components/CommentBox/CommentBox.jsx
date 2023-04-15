import React, { useState, useEffect } from 'react';
import './CommentBox.css'
import axios from 'axios';

const CommentBox = () => {

  const [comment, setComment] = useState('') 

  async function postComment(event){
      event.preventDefault()
      await axios.post('http://127.0.0.1:8000/api/comments/')
    }
  
  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }
  
  return (
    <div class='comment-box'>
      <form>
        <label>Comments </label>
        <input type='text' onChange={(event) => handleCommentChange(event)}></input>
        <button onClick={(event) => postComment}>Post Your Comment</button>
      </form>
    </div>
  )
}

export default CommentBox;