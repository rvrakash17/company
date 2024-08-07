import React, { useState } from 'react';
import BlogCard from './BlogCard';
import './Blog.css';

const blogPosts = [
  {
    title: "Understanding Cybersecurity",
    content: "Learn the basics of cybersecurity and how to protect your data.",
    link: "https://yourblogsite.com/understanding-cybersecurity"
  },
  {
    title: "Top 10 Design Trends in 2024",
    content: "Discover the latest trends in UI/UX design for 2024.",
    link: "https://yourblogsite.com/top-10-design-trends-2024"
  },
  // Add more blog posts here
];

const Blog = () => {
  const [posts, setPosts] = useState(blogPosts);

  return (
    <section id="blog" className="blog">
      <h2>#Blog</h2>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button className="post-button" onClick={() => window.open(post.link, "_blank")}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
