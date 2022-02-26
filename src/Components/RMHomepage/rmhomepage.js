import React, { useEffect, useState } from "react";
import GetLocationsList from "../../Actions/locationsActions";
import "./rmhomepage.css";
import citadel from '../../Images/citadel.png'

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

  console.log(locations);

  return (
    <>
      <article className="homepage-body">
        <div className="locations-container">
          <h1 id="locations-text">Locations</h1>
          <div className="list-items">
            {locations.map((location) => {
              return(
                <p id="location-name">{location.name}</p>
              )
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
