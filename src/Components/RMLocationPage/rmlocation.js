import React, { useEffect, useState } from "react";
import GetLocation from "../../Actions/locationAction";
import GetResidentsList from "../../Actions/residentsAction";
import "./rmlocation.css";

const Location = () => {
  const [location, setLocation] = useState();
  const [residents, setResidents] = useState();

  useEffect(() => {
    async function fetchLocationData() {
      let currentPath = window.location.pathname.split("/");
      let currentPathnum = currentPath[2];
      const response = await GetLocation(currentPathnum);
      setLocation(response);
    }
    fetchLocationData();
  }, []);

  useEffect(() => {
    async function fetchResidentsData() {
      const initialResponse = await GetResidentsList(location?.name);
      const response = initialResponse.reverse();
      setResidents(response);
    }
    fetchResidentsData();
  }, [location]);

  const NoResidents = () => {
    return residents?.length == 0 ? (
      <>
        <h1>No residents live here</h1>
      </>
    ) : (
      <>
        <h1>Loading...</h1>
      </>
    );
  };

  return (
    <>
      <article>
        <div className="location-container">
          <h1 id="location">{location?.name}</h1>
          <h3 id="dimension">Dimennsion: {location?.dimension}</h3>
          <p id="type">Type: {location?.type}</p>
        </div>
        <div className="residents-container">
          <h1 id="residents">Residents</h1>
          <div className="residents-grid">
            {residents?.length > 0 ? (
              residents?.map((resident, i) => {
                return (
                  <div className="image-container">
                    {resident ? (
                      <img id="resident-image" key={i} src={resident?.image} />
                    ) : (
                      console.log("hi")
                    )}
                    <div id="resident-info">
                      <h3 id="resident">{resident?.name}</h3>
                      <h5 id="status">Status: {resident?.status}</h5>
                    </div>
                  </div>
                );
              })
            ) : (
              <NoResidents />
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default Location;
