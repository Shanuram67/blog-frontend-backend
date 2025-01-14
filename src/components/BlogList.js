import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogList;
