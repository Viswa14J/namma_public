import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container"> 
      <div className="login-box"> 
        <h2>Create an Account</h2> 
        <p className="subtitle">Sign up for a new account</p>
        <form className="login-form" onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-fields"
              required
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-fields"
              required
            />
            {/* Add the eye icon inside the input-group */}
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password-icons`}
              onClick={togglePasswordVisibility}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-buttons">Sign Up</button>
        </form>
        <div className="forgot-password">
          <a href="/">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
