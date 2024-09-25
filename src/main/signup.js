import React, { useState } from "react";
import { auth, firestore } from "./firebase"; // Ensure Firestore is imported from your configured Firebase file
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions for saving data
import './signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SuccessModal from "./successmodal"; // Import the SuccessModal component

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [loading, setLoading] = useState(false); // Loading state to control the button text
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when signup starts
    setError("");
    
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save the username and email in Firestore using the user's UID as the document ID
      await setDoc(doc(firestore, "users", user.uid), {
        username: username,
        email: email
      });

      // Show the modal with email and masked password
      setModalVisible(true);
      setLoading(false); // Set loading to false when signup is complete
    } catch (err) {
      // Handle signup errors and display them to the user
      setError(err.message);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close the modal
    navigate('/'); // Navigate to login page
  };

  return (
    <div className="container2">
      <div className="login-container">
        <div className="login-box">
          <h2>Create an Account</h2>
          <p className="subtitle">Sign up for a new account</p>
          <form className="login-form" onSubmit={handleSignup}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-fields"
                required
              />
            </div>
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
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password-icons`}
                onClick={togglePasswordVisibility}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            
            {/* Button text changes based on the loading state */}
            <button type="submit" className="signup-buttons" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          
          <div className="forgot-password">
            <a href="/">Already have an account? Login</a>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal 
        email={modalVisible ? email : ""} 
        password={modalVisible ? "●●●●●●●" : ""}  // Masked password
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default Signup;
