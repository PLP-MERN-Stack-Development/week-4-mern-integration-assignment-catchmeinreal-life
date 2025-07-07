// 🔷 1. Home Page (/)
// Purpose:
// Public-facing blog list with latest posts.

// Components:
// Navbar

// Logo / Library name

// Links: Home | About | Login (or Dashboard if logged in)

// Hero Section

// Welcome message

// Featured image or carousel (optional)

// Post List (grid or vertical stack)

// Post preview cards (title, author, date, excerpt, thumbnail)

// “Read More” button links to /posts/:id

// Extras:
// Search bar or category filter (optional)

// Pagination or "Load more" button




import {Link} from 'react-router-dom'
// import { useState } from 'react'

// import './App.css' import css

function Home() {
//   const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img  className="logo" alt="Blog logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img className="logo react" alt="Blog logo1" />
        </a>
      </div>
      <h1>mochaBlogs</h1>
      <div className="card">
        <button >
          Login
        </button>
        <p>
          get your daily Blogs on the latest trends
        </p>
      </div>
      <p className="read-the-docs">
        the logos are links
      </p>
    </>
  )
}

export default Home;
