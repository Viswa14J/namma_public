

import React, { useState } from "react";
import "./Home.css"; 
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
// Import the external CSS file

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const cardsData = [
        { id: 1, title: "HOME IDEA", description: "Idea to how to build home", bgImage: "/assets/images/card1.png" },
        { id: 2, title: "Card 2", description: "This is card 2", bgImage: "https://via.placeholder.com/300x200" },
        { id: 3, title: "Card 3", description: "This is card 3", bgImage: "https://via.placeholder.com/300x200" },
    ];

  
    const filteredCards = cardsData.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle card click event
    const navigate = useNavigate();  
    const handleCardClick = (card) => {
        navigate(`/card/${card.id}`);  
    };

    return (
    
        <div className="container5">
         <Navbar/> 
            {/* Search box */}
            <input
                type="text"
                placeholder="Search cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchBox"
            />

            {/* Cards */}
            <div className="cardContainer">
                {filteredCards.length > 0 ? (
                    filteredCards.map(card => (
                        <div
                        key={card.id}
                        onClick={() => handleCardClick(card)}
                        className="card"
                        style={{ backgroundImage: `url(${card.bgImage})` }}
                        >
                            <div className="cardContent1">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cards found</p>
                )}
            </div>
        </div>
    );
};

export default Home;