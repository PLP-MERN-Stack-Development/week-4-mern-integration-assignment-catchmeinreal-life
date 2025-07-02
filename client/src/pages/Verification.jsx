// email verification
//enter otp
import React from "react";


function Verification() {


  return (
    <div>
      <h2>Email Verification</h2>
      <p>Please check your email for the verification link.</p>
      <p>If you didn't receive the email, you can <a href="/resend-verification">resend it</a>.</p>
    </div>
  );
}

export default Verification;