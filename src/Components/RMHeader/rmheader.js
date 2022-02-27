import React from "react";
import "../RMHeader/rmheader.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="name-container">
          <h1 className="name"><a href='/' style={{textDecoration: 'none', color:'#02afc5'}}>Rick and Morty</a></h1>
        </div>
      </div>
    </>
  );
};

export default Header;
