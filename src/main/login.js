// src/components/Login.js
import React, { useState } from "react";
import { auth, firestore } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Firestore functions for fetching data
import { useNavigate } from "react-router-dom";
import './login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch the username from Firestore
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists()) {
        const { username } = userDoc.data();

        // Pass the username and email to the next page
        navigate("/next", { state: { email: user.email, username } });
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="container1">
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
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

        <button type="button" className="signup-button" onClick={() => navigate("/signup")}>
          Create an Account
        </button>
      </div>
    </div>
    </div>
  );
}

export default Login;
