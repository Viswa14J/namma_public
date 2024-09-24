

import React, { useState } from "react";
import "./Home.css"; // Import the external CSS file

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Sample data for cards with background images
    const cardsData = [
        { id: 1, title: "Card 1", description: "This is card 1", bgImage: "/assets/images/card1.png" },
        { id: 2, title: "Card 2", description: "This is card 2", bgImage: "https://via.placeholder.com/300x200" },
        { id: 3, title: "Card 3", description: "This is card 3", bgImage: "https://via.placeholder.com/300x200" },
    ];

    // Filtering the cards based on the search input
    const filteredCards = cardsData.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle card click event
    const handleCardClick = (card) => {
        alert(`You clicked on ${card.title}`);
    };

    return (
    
        <div className="container">
            <h1>Dashboard</h1>
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
                            <div className="cardContent">
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
