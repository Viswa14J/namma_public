import React from "react";
import './SuccessModal.css';

function SuccessModal({ email, password, onClose }) {
  if (!email && !password) return null; // Don't render if no email/password

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Sign Up Successful!</h3>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <button className="close-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default SuccessModal;
