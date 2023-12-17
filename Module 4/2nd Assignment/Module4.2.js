function huntShows(event) {
    event.preventDefault();

    const seriesQuery = document.getElementById("seriesQuery").value;
    const apiEndpoint = `https://api.tvmaze.com/search/shows?q=${seriesQuery}`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(seriesData => {
            console.log("Discovering TV Series for \"" + seriesQuery + "\":", seriesData);

            if (seriesData.length > 0) {
                const firstSeries = seriesData[0].show;
                console.log("First Series Name:", firstSeries.name);
                console.log("Summary:", firstSeries.summary);
            } else {
                console.log("No results found.");
            }
        })
        .catch(error => {
            console.error("Uh-oh, couldn't fetch data for \"" + seriesQuery + "\":", error);
        });
}

console.log("Lets see some shows?");
