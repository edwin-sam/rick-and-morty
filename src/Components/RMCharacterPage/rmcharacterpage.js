import React, { useEffect, useState } from "react";
import GetCharacter from "../../Actions/characterAction";
import PostCharacterNotes from "../../Actions/characterNotesAction";
import { Link } from "react-router-dom";
import "./rmcharacterpage.css";

const Character = () => {
  const [character, setCharacter] = useState();
  const [locationID, setLocationID] = useState();
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const fetchCharacterData = async () => {
      let currentPath = window.location.pathname.split("/");
      let currentPathnum = currentPath[2];
      const response = await GetCharacter(currentPathnum);
      setCharacter(response);
    };
    fetchCharacterData();
  }, []);

  useEffect(() => {
    const getLocationId = async () => {
      let locationURL = await character?.location.url.split("/");
      let currentPathnum = locationURL[5];
      setLocationID(currentPathnum);
    };
    getLocationId();
  }, [character]);

  return (
    <>
      <style>{"body { background-color: #0D192D; }"}</style>
      {character ? (
        <div className="character-container">
          <div className="card-container">
            <Link to={`/location/${locationID}`} id="location-name">
              <p id="card-location">{character?.location?.name}</p>
            </Link>
            <section className="top-section">
              <div id="card-image-container">
                <img
                  id="card-image"
                  src={character?.image}
                  alt={character?.name + "image"}
                />
              </div>
              <div className="card-status">
                <h3>
                  <span style={{ color: "#37B0B4" }}>Status:</span>{" "}
                  {character?.status}
                </h3>
                <span
                  className={
                    character?.status === "Alive"
                      ? "green-dot"
                      : character?.status === "Dead"
                      ? "red-dot"
                      : "blue-dot"
                  }
                ></span>
              </div>
            </section>
            <p id="card-name">{character?.name}</p>
            <hr id="card-line"></hr>
            <div className="bottom-section">
              <p>
                <span style={{ color: "#37B0B4" }}>Species: </span>{" "}
                {character?.species}
              </p>
              <p>
                <span style={{ color: "#37B0B4" }}>Gender: </span>{" "}
                {character?.gender}
              </p>
            </div>
          </div>

          <section className="character-notes">
            <div className="notes-button">
              <button
                onClick={() =>
                  showNotes ? setShowNotes(false) : setShowNotes(true)
                }
                id="add-button"
              >
                Add Notes <span id="plus">+</span>
              </button>
            </div>
            {showNotes ? (
              <div className="notes-container">
                <textarea
                  id="notes-text"
                  rows="20"
                  cols="50"
                  onChange={(e) => setNotes(e.target.value)}
                />
                <div>
                  <button
                    disabled={notes === ""}
                    onClick={() => {
                      PostCharacterNotes(character, notes);
                      setShowNotes(false);
                      setNotes("");
                      alert("notes saved");
                    }}
                    className="submit-button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : null}
          </section>
        </div>
      ) : (
        <h1 className="loading">loading...</h1>
      )}
    </>
  );
};

export default Character;
