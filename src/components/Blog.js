import React, { useState } from 'react';
import Layout from './Layout';

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, content: 'This is the first blog post.' },
    { id: 2, content: 'Here is another post.' },
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const nextId = posts.length + 1;
    setPosts([...posts, { id: nextId, content: newPost }]);
    setNewPost('');
  };

  return (
    <Layout>
      <h2>Blog</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="Write a new post..."
          rows="3"
          required
        />
        <button type="submit">Post</button>
      </form>
      {posts.map(post => (
        <div key={post.id} style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
          {post.content}
        </div>
      ))}
    </Layout>
  );
};

export default Blog;
