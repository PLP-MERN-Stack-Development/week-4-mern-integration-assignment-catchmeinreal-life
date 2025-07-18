import Navbar from '../components/Navbar';
// username, email, password 

import { authService } from '../services/api'
import React, { useState } from 'react';


// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import { useEffect } from 'react';

import Navbar from '../components/Navbar';


export default function Signup() {
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({email: '', password: '' });
  const [message, setMessage] = useState('');

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await authService.login(formData);
      console.log(res.status, res.data, res.message);
      setMessage(res.data);
      toast.success(res.message, {
        autoClose: 2000, // Closes after 2 seconds
      })
      setTimeout(() => {
        navigate('/blog'); // navigate to login page after successful signup
      },3000); // navigate after 3 seconds
      setIsLoading(false); // set loading to false after successful signup
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error logging in');
      toast.error(err.response?.data?.message || 'Error logging in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div>
      <Navbar />
      <h2>LogIn</h2>
      <form onSubmit={onSubmit}>

        <label htmlFor="email">email:</label> 
        <input type="email" name="email" placeholder="Email" onChange={onChange} required /> <br />

        <label htmlFor="passwod">Password:</label>
        <input type="password" name="password" placeholder="Password" onChange={onChange} required /> <br />
        <button type="submit">{isLoading ? 'LogIn...' : 'Login.'}</button>
      </form>
      <p>{message}</p>
      <ToastContainer />
    </div>
    </>
  );
}
