
// username, email, password 

import { authService } from '../services/api'
import React, { useState } from 'react';
// import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({email: '', password: '' });
  const [message, setMessage] = useState('');

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await authService.login(formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <div>
      <h2>LogIn</h2>
      <form onSubmit={onSubmit}>

        <label htmlFor="email">email:</label> 
        <input type="email" name="email" placeholder="Email" onChange={onChange} required /> <br />

        <label htmlFor="passwod">Password:</label>
        <input type="password" name="password" placeholder="Password" onChange={onChange} required /> <br />
        <button type="submit">LogIn</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
