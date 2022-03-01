import React from "react";
import "../RMHeader/rmheader.css";

const Header = () => {
  return (
    <>
        <div className="header-container">
          <div className="name-container">
            <h1 className="name">
              <a href="/" style={{ textDecoration: "none", color: "#02afc5" }}>
                Rick and Morty
              </a>
            </h1>

            <a href="/obituary" id="location-name">
              <h3 className="obituary">Obituary</h3>
            </a>
          </div>
        </div>
    </>
  );
};

export default Header;
