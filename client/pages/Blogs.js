
import Navbar from "../components/Navbar";
import { useState } from "react";
import api from "../api";

function Blogs() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/blog", formData);
      alert("Blog post created successfully!");
      setFormData({ title: "", content: "", tags: "" });
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create blog post.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="blogs">
        <h1>Create a Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="tags">Tags (comma-separated):</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Blogs;