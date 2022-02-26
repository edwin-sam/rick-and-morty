async function GetResidentsList(location) {
  let allData = [];
  let morePagesAvailable = true;
  let currentPage = 0;

  while(morePagesAvailable) {
    currentPage++;
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    let data = await response.json();
    data.results.filter((resident) => {
      if(resident.location.name == location) {
        allData.unshift(resident);
      }
    })
    morePagesAvailable = currentPage < data.info.pages;
  }
  return allData;
}

export default GetResidentsList;
