async function GetLocation(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
    let data = await response.json();

    return data;
}

export default GetLocation;
