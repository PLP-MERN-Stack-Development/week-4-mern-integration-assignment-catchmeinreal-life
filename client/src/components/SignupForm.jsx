import { authService } from '../services/api'
import React, { useState } from 'react';


function SignupForm()  {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => { /**gets called on form submission */
    e.preventDefault();

    try {
      const res = await authService.register(formData);
      console.log(res.message);
      setMessage(res.data);
    } catch (err) {
      console.log(err)
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

        <input type="text" name="name" placeholder="Username" onChange={onChange} required /> <br />
        <input type="email" name="email" placeholder="Email" onChange={onChange} required /> <br />
        <input type="password" name="password" placeholder="Password" onChange={onChange} required />
        <br />
        <button type="submit">Sign Up</button>

      </form>
      <p>{message}</p>
    </div>
  );
}

export default SignupForm;