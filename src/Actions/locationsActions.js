async function GetLocationsList() {
  let allData = [];
  let morePagesAvailable = true;
  let currentPage = 0;

  while (morePagesAvailable) {
    currentPage++;
    const response = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
    let data = await response.json();
    data.results.forEach((e) => allData.unshift(e));
    morePagesAvailable = currentPage < data.info.pages;
  }

  return allData;
}

export default GetLocationsList;
