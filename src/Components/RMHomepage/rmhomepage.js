import React, { useEffect, useState } from "react";
import GetLocationsList from "../../Actions/locationsActions";
import "./rmhomepage.css";
import citadel from "../../Images/citadel.png";
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const initialResponse = await GetLocationsList();
      const response = initialResponse.reverse();
      setLocations(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <article className="homepage-body">
        <div className="locations-container">
          <h1 id="locations-text">Locations</h1>
          <div className="list-items">
            {locations.map((location, i) => {
              return (
                <>
                  <Link to={`/location/${location.id}`} id="location-name" key={i}>
                    <p key={i}>{location.name}</p>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <div className="homepage-pic">
          <img id="image" src={citadel} alt="citadel"></img>
        </div>
      </article>
    </>
  );
};

export default Homepage;
