import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Import your Firebase configuration
import { signInWithEmailAndPassword } from "firebase/auth";
import './login.css'; // The CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); 
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup"); // Redirect to the signup page
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p className="subtitle">Login to your account</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"} // Conditionally change input type
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            {/* Add the eye icon */}
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password-icon`}
              onClick={togglePasswordVisibility}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="divider-or">
          <p>or</p>
        </div>

        <button type="button" className="signup-button" onClick={handleSignupRedirect}>
          Create an Account
        </button>

        
      </div>
    </div>
  );
}

export default Login;
