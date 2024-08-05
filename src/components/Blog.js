// Blog.js
import React, { useState } from 'react';
import './Blog.css'; // Import the CSS file

function Blog() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([{ content: newPost, comments: [] }, ...posts]);
      setNewPost('');
    }
  };

  const handleCommentSubmit = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
      <form onSubmit={handlePostSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          className="post-textarea"
        ></textarea>
        <button type="submit" className="post-button">Post</button>
      </form>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post.content}</p>
            <CommentSection
              postIndex={index}
              comments={post.comments}
              onCommentSubmit={handleCommentSubmit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CommentSection({ postIndex, comments, onCommentSubmit }) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onCommentSubmit(postIndex, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comments">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="comment-input"
        />
        <button type="submit" className="comment-button">Comment</button>
      </form>
      {comments.map((comment, index) => (
        <p key={index} className="comment">{comment}</p>
      ))}
    </div>
  );
}

export default Blog;
