
import Navbar from "../components/Navbar";
import {postService} from "../services/api"; // 

import React, { useEffect, useState } from "react";

function Blogs() {

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, };
    }
  
    componentDidCatch(error, info) {
      console.error("Error boundary caught an error", error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return <h2>Something went wrong in the navbar. {this.state.theError}</h2>;
      }
  
      return this.props.children;
    }
  }
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await postService.getAllPosts();
        if (!response.ok) {
          setError('Network response was not ok')
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Blogs fetched successfully:', data);
        setBlogs(data);
        setCount(data.length)
      } catch (error) {
        setError('Failed to fetch blogs : ' + error.message);
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);

      }
    };

    fetchBlogs();
  }, []);






function blogsDiv() {
  return (
    <div className="blogs-list">
      <p>hello there user1..available blogs</p>
      <h2>yooooooooooo</h2>
      {loading ? (
        <p>Loading blogs...</p>
      ) : error ? (
        <p>{error}</p>
      ) : blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );

}






  return (
    <>
  <ErrorBoundary>
    <Navbar />
  </ErrorBoundary>
    <div className="blogs">
      <h1>Blogs</h1>

      <p>Blogs available</p>
      {loading ? <p>Blogs will be displayed here soon</p> : blogsDiv() }
      <div>


        {/**create post */}
      </div>
    </div>
    </>
  );
}

export default Blogs;