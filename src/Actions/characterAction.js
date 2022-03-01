async function GetCharacter(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  let data = await response.json();

  return data;
}

export default GetCharacter;
