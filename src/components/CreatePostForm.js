import React, { useState } from "react";

const CreatePostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addPost({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <h2>Create a New Post</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
          required
        ></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default CreatePostForm;
