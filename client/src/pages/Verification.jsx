// email verification
//enter otp
/**
 * verification url
 */
import { authService } from "../services/api";
import React, { useState } from "react";
/**toast notification */
import { toast, ToastContainer} from 'react-toastify';
/**navigation on success verification */
import { Link, useNavigate} from 'react-router-dom';


function Verification() {
    const [token, setToken] = useState('')
    const [verify, setVerify] = useState(false)
    const navigate = useNavigate();

    const onChange = (e) => setToken(e.target.value);

    async function handleSubmit(e) {
        e.preventDefault()
        setVerify(true);

        try {

            const res = await authService.verify(token);
            console.log(res.status, res.data, res.message);
            toast.success(res.message, {
                autoClose: 2000, // Closes after 2 seconds
            });
            setTimeout(() => {
                navigate('/login'); // navigate to login page after successful verification
            }, 3000); // navigate after 3 seconds

        } catch (err) {
            console.error(err);
            toast(err.response?.data?.message || 'Error verifying email');
        } finally {
            setVerify(false);
        }

    }


  return (
    <div>
      <h2>Email Verification</h2>
      <p>Please check your email for the verification link.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="paste here the token" onChange={onChange} />
        <button type="submit">{verify? 'Verifying...' : 'Verify'}</button>
      </form>
      <p>If you didn't receive the email, you can <a href="/resend-verification">resend it</a>.</p>
      <ToastContainer />
    </div>
  );
}

export default Verification;