import React from "react";
import "./Home.css";

// Home component that returns a div with container and text class
function Home() {
  return (
    <div className="section-a">
      <div className="container">
        {/* Image component */}
        <div className="image-kom">
          <img src="https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="img" />
        </div>
        <div className="text">
          {/* Emojis */}
          👩🏼‍🦰 🧑🏼‍🦰
          {/* Header component */}
          <h1 className="mega-font">
            Hello
            <span> Pet Lovers</span>
          </h1>
          {/* Paragraph component */}
          <p style={{ fontSize: "30px" }}>
          Petfinder is a company dedicated to helping people find their perfect pet match. The company was founded with the mission of promoting the adoption of homeless pets and reducing pet overpopulation. 
          Petfinder operates as an online database that connects potential adopters with animals available for adoption at animal shelters and rescue organizations across the Kenya🇰🇪.
          </p>

          {/* Empty paragraph component */}
          <p className="number"></p>
          {/* Horizontal line component */}
          <hr width="50%" />
          
          {/* Column grid component */}
          <div className="column-grid">
            <div className="column-1">
              {/* Column component */}
              <h3>Dogs</h3>
              <p>Domestic Animals</p>
            </div>
            <div className="column-2">
              {/* Column component */}
              <h3>Cats</h3>
              <p>Tamed Animals</p>
            </div>
            <div className="column-3">
              {/* Column component */}
              <h3>Family Friendly</h3>
              <p>kids safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
