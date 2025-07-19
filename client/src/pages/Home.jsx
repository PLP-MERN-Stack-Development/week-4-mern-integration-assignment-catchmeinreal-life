// 🔷 1. Home Page (/)
// Purpose:
// Public-facing blog list with latest posts.

// Components:
// Navbar
import Navbar from '../components/Navbar';

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



import { toast, ToastContainer } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

// import './App.css' import css
import Button from '../components/Button';

function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate();


  const handleLogin =async e => { /**gets called on login btn clicked */
      setIsLoading(true); // set loading to true when redirecting to login page
      try {
        console.log(e.target);
        toast.success('redirecting to login page', {
          autoClose: 2000, // Closes after 2 seconds
        })
        setTimeout(() => {
          navigate('/login'); // navigate to login page
        },3000); // navigate after 3 seconds
      } catch (err) {
        setMessage('Error redirecting to login page');
        toast.error(err || 'Error redirecting');
      } finally {
        setIsLoading(false);
      }
  }

  return (
    <>
    <Navbar />
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img  className="logo" alt="Blog logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img className="logo react" alt="Blog logo1" />
        </a>
      </div> */}
      <h1>mochaBlogs</h1>
      <div className="card">
        <button onClick={handleLogin} >
          {isLoading ? 'redirecting' : 'Login' }
        </button>
        <Button variant='SignIn' size='md' onClick={handleLogin}>{isLoading ?  'redirecting' : 'SignIn' }</Button>
        <p>
          get your daily mochaBlogs on the latest trends.
        </p>
      </div>
      <p className="read-the-docs">
        the logos are links
      </p>

      <p>{message}</p>
      <ToastContainer />
    </>
  )
}



export default Home;
