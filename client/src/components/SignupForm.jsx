import { authService } from '../services/api'
import React, { useState } from 'react';

/**toast notification */
import { toast, ToastContainer } from 'react-toastify';
/**navigation */
import { Link, useNavigate } from 'react-router-dom';


function SignupForm()  {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(''); // state to manage messages

  const [isLoading, setIsLoading] = useState(false); // state to manage loading status
  const navigate = useNavigate(); // for navigation after successful signup





  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => { /**gets called on form submission */
    e.preventDefault();
    setIsLoading(true); // set loading to true when form is submitted

    try {
      const res = await authService.register(formData);
      console.log(res.status, res.data, res.message);
      setMessage(res.data);
      toast.success(res.message, {
        autoClose: 2000, // Closes after 2 seconds
      })
      setTimeout(() => {
        navigate('/verification'); // navigate to login page after successful signup
      },3000); // navigate after 3 seconds
      setIsLoading(false); // set loading to false after successful signup
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error signing up');
      toast.error(err.response?.data?.message || 'Error signing up');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>

      <h2>Sign Up</h2>

      <div>
        <p>Have an account?<span><Link to="/login" className="">
          <span className="">LogIn</span>
        </Link></span></p>
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
        <button type="submit">{isLoading? 'Signing up...' : 'SignUp'}</button>

      </form>
      <p>{message}</p>
      <ToastContainer />
    </div>
  );
}

export default SignupForm;