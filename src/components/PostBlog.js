import React, { useState, useEffect } from "react";
import "../styles/PostBlog.css";

const PostBlog = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend when component loads
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Function to add a new post
  const handlePost = async () => {
    if (!name || !surname || !title || !content) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, title, content }),
      });

      const data = await response.json();
      if (response.ok) {
        // Update state with the new post added to the database
        setPosts((prevPosts) => [
          ...prevPosts,
          { id: data.postId, name, surname, title, content },
        ]);
        setName("");
        setSurname("");
        setTitle("");
        setContent("");
      } else {
        alert(data.message || "Failed to add post");
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Only remove the post from the state if deletion was successful
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        alert("Error deleting post.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Create a Blog Post</h2>

      <input type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)} />

      <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />

      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea placeholder="Write your content here..." value={content} onChange={(e) => setContent(e.target.value)} />

      <button onClick={handlePost}>Post Blog</button>

      <h3>All Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p><strong>By:</strong> {post.name} {post.surname}</p>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default PostBlog;
