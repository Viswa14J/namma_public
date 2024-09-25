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
  const [showDetails, setShowDetails] = useState(false); // State for toggling details visibility

  const toggleDetails = () => {
    setShowDetails(!showDetails); // Toggle the visibility of user details
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTamil, setIsTamil] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      title: isTamil ? 'எங்கள் வலைத்தளத்திற்கு வருக' : 'Welcome to Our Website',
      description: isTamil ? 'எங்கள் வலைத்தளம் வீடு கட்டுதல் மற்றும் புதுப்பித்தல் செயல்முறையை எளிதாக்குவதை நோக்கமாகக் கொண்டுள்ளது.' : 'Our website aims to simplify the process of home construction and renovation.',
      
    },
    {
      title: isTamil ? 'எங்கள் சேவைகளை ஆராயுங்கள்' : 'Explore Our Services',
      description: isTamil ? 'பொறியாளர்கள், பிளம்பர்கள் மற்றும் ஒப்பந்தக்காரர்கள் போன்ற சேவைகள். இணையதளம் மூலம்.' : 'Services such as engineers, plumbers, and contractors. Through a website.',
        },
    {
      title: isTamil ? 'வாழ்க்கையைத் தொடங்குங்கள்' : 'Let’s Get Started',
      description: isTamil ? 'இது மூன்றாவது ஸ்லைடாகும்.' : 'This is the third slide.',
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
          {/* User icon that toggles the display of user details */}
          {!showDetails ? (
            <FaUserCircle
              size={30} // Adjust the size of the icon
              style={{ cursor: 'pointer' }} // Make the icon clickable
              onClick={toggleDetails} // Toggle the details on click
            />
          ) : (
            <div className="user-details">
              <p><strong>Username:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
            </div>
          )}
        </div>
      </nav>

      {/* Main content area */}
      <div className="abovecontainer">
        {/* Language Button - Positioned outside the slide content */}
        <button onClick={toggleLanguage} className="language-button">
          {isTamil ? 'English' : 'தமிழ்'}
        </button>

        <div className="container" style={{ background: slides[currentSlide].backgroundColor,  backdropFilter: 'blur(10px)' }}>
          {/* Slide Content */}
          <div className="slide-content slide">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
          </div>

          {/* Pagination Dots */}
          <div className="pagination">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}  // Add this to make dots clickable
              ></span>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons">
            {currentSlide < slides.length - 1 && (
              <button onClick={handleNextSlide} className="next-button">Next</button>
            )}
            {currentSlide === slides.length - 1 && (
              <button onClick={handleGetStarted} className="get-started-button">Get Started</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextPageFlow;
