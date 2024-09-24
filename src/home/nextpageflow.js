import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './nextpageflow.css'; // CSS file for custom styling
import smallImage from '../Assets/namma.jpg'; // Your logo
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User icon from FontAwesome

function NextPageFlow() {
  const location = useLocation();

  // Extracting the passed email and username from the state
  const { email, username } = location.state || { email: "N/A", username: "N/A" };
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle function for the dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTamil, setIsTamil] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      title: isTamil ? 'எங்கள் வலைத்தளத்திற்கு வருக' : 'Welcome to Our Website',
      description: isTamil ? 'இது முதல் ஸ்லைடாகும்.' : 'This is the first slide.',
      backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)'
,
 // Gradient background
    },
    {
      title: isTamil ? 'எங்கள் சேவைகளை ஆராயுங்கள்' : 'Explore Our Services',
      description: isTamil ? 'இது இரண்டாவது ஸ்லைடாகும்.' : 'This is the second slide.',
      backgroundColor: 'linear-gradient(to right, #43cea2, #185a9d)', // Another gradient
    },
    {
      title: isTamil ? 'வாழ்க்கையைத் தொடங்குங்கள்' : 'Let’s Get Started',
      description: isTamil ? 'இது மூன்றாவது ஸ்லைடாகும்.' : 'This is the third slide.',
      backgroundColor: 'linear-gradient(to right, #ff512f, #f09819)', // Another gradient
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleGetStarted = () => {
    navigate('/home');
  };

  const toggleLanguage = () => {
    setIsTamil((prevIsTamil) => !prevIsTamil);
  };

  return (
    <div className="page-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={smallImage} alt="Logo" className="small-image" />
          <h1>Namma Veedu</h1>
        </div>
      
        <div className="navbar-right">
          {/* User icon that triggers dropdown */}
          <FaUserCircle
            size={30} // Adjust the size of the icon
            style={{ cursor: 'pointer' }} // Make the icon clickable
            onClick={toggleDropdown} // Toggle the dropdown on click
          />
          
          {/* Dropdown for user details */}
          {showDropdown && (
            <div className="user-dropdown">
              <div className="dropdown-content">
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content area */}
      <div className="container" style={{ background: slides[currentSlide].backgroundColor }}>
        {/* Slide Content */}
        <div className="slide-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
        </div>
        <div className="buttons">
          <button onClick={handleNextSlide} className="next-button">Next</button>
          {currentSlide === slides.length - 1 && (
            <button onClick={handleGetStarted} className="get-started-button">Get Started</button>
          )}
        </div>
        <button onClick={toggleLanguage} className="language-button">
          {isTamil ? 'English' : 'தமிழ்'}
        </button>
      </div>
    </div>
  );
}

export default NextPageFlow;
