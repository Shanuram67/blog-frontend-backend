import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import CreatePostForm from "./components/CreatePostForm";
import "./styles.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Add a new post to the backend
  const addPost = async (newPost) => {
    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const createdPost = await response.json();
        setPosts((prevPosts) => [createdPost, ...prevPosts]);
      } else {
        console.error("Error creating post:", await response.text());
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Fetch posts on initial render
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <section id="home">
          <h1>Blog Platform</h1>
          <BlogList posts={posts} />
        </section>
        <section id="create-post">
          <CreatePostForm addPost={addPost} />
        </section>
        <section id="about">
          <h2>About</h2>
          <p>Welcome to the Blog Platform, a place to share and explore ideas!</p>
        </section>
      </div>
    </div>
  );
};

export default App;
