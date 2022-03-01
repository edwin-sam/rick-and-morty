async function PostCharacterNotes(character, note) {
  fetch(`https://rickandmortyapi.com/api/character/${character.id}`, {
    method: "POST",
    body: JSON.stringify({
      id: character.id,
      episode: [character.episode],
      gender: character.gender,
      image: character.image,
      location: character.location,
      name: character.name,
      origin: character.origin,
      species: character.species,
      status: character.status,
      type: character.type,
      url: character.url,
      notes: note,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
}

export default PostCharacterNotes;
