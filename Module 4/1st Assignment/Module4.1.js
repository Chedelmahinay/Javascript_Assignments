function huntShows(event) {
  event.preventDefault();

  const userHuntQuery = document.getElementById("seriesQuery").value;
  const apiEndpoint = `https://api.tvmaze.com/search/shows?q=${userHuntQuery}`;

  fetch(apiEndpoint)
    .then(response => response.json())
    .then(showsData => {
      console.log("Results for \"" + userHuntQuery + "\":", showsData);

    })
    .catch(error => {
      console.error("Uh-oh, couldn't fetch data for \"" + userHuntQuery + "\":", error);
    });
}

console.log("Lets see some shows?");
