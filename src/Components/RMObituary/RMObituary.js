import React, { useEffect, useState } from "react";
import getCharacters from "../../Actions/charactersAction";
import { Link } from "react-router-dom";
import "./RMObituary.css";

const Obituary = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    const getCharactersData = async () => {
      let response = await getCharacters();
      setAllCharacters(response);
    };
    getCharactersData();
  }, []);

  return (
    <>
      <div className="title">
        <h1>Remembering</h1>
      </div>
      <section className="obituary-container">
        {allCharacters.map((character) => {
          if (character?.status === "Dead") {
            return (
              <>
                <div className="dead-character-container">
                  <Link to={`/character/${character.id}`}>
                  <img id="dead-image" src={character.image} />
                  </Link>
                  <h4>{character?.name}</h4>
                </div>
              </>
            );
          }
        })}
      </section>
    </>
  );
};

export default Obituary;
