
// username, email, password 

import { authService } from '../services/api'
import React, { useState } from 'react';
// import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await authService.register(formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <div>

      <h2>Sign Up</h2>

      <div>
        <p>Have an account?<span><a href=''>Login in now</a></span></p>
      </div>

      <div>
        <div><a href="">Google</a></div>
      </div>

      <hr /> <p>Or with email and password </p><hr />

      <form onSubmit={onSubmit}>

        <input type="text" name="username" placeholder="Username" onChange={onChange} required /> <br />
        <input type="email" name="email" placeholder="Email" onChange={onChange} required /> <br />
        <input type="password" name="password" placeholder="Password" onChange={onChange} required />
        <br />
        <button type="submit">Sign Up</button>

      </form>
      <p>{message}</p>
    </div>
  );
}
