
import Navbar from "../components/Navbar";
import { useState, useEffect } from 'react'
import { postService } from '../services/api'
import { useNavigate } from "react-router-dom";

function Blog () {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate();






  useEffect(()=>{
    const validateToken = async () => {

      const token = localStorage.getItem(token);
      if (!token) navigate('/login')
       //stop here and don't send validation request

      try {
        setIsLoading(true)
        let res = await postService.getAllPosts();
        if (res.valid) {
          
          setIsLoading(false);

        } else {
          //token is invalid or expired
          localStorage.removeItem('token');
        }
      } catch (error) {
        setMessage(error.message);
        console.error('Error validating token', error.message)
      } 
    };

    validateToken()
  }, [navigate]);

  return (
    <>
    <Navbar />
    <div>
      <h1>mocha Page for all the dirt</h1>
      {isLoading ? <p>Fetching blogs ...</p> : (message ? <p>error:{message}</p> : <h2>blogs list</h2> ) }
    </div>
    </>
  )

}

export default Blog