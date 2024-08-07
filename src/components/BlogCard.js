import React from 'react';

const BlogCard = ({ title, content, link }) => {
  return (
    <div className="blog-card" onClick={() => window.open(link, "_blank")}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default BlogCard;
