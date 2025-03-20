import React, { useState, useEffect } from "react";
import "../styles/PostBlog.css";

const PostBlog = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://my-backend-blog.onrender.com";

  // Fetch posts from backend when component loads
  useEffect(() => {
    setLoading(true);
    fetch(`${backendUrl}/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError(`Failed to fetch posts: ${error.message}`);
        setLoading(false);
      });
  }, [backendUrl]);

  // Function to add a new post
  const handlePost = async () => {
    if (!name || !surname || !title || !content) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, title, content }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: data.postId, name, surname, title, content },
      ]);
      setName("");
      setSurname("");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding post:", error);
      alert(`Error adding post: ${error.message}`);
    }
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`${backendUrl}/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert(`Error deleting post: ${error.message}`);
    }
  };

  return (
    <div className="post-blog-container">
      <h2>Create a Blog Post</h2>

      <div className="form-container">
        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handlePost}>Post Blog</button>
      </div>

      <h3>All Posts</h3>
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h4>{post.title}</h4>
              <p className="author">
                <strong>By:</strong> {post.name} {post.surname}
              </p>
              <p className="content">{post.content}</p>
              <button 
                onClick={() => handleDelete(post.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostBlog;