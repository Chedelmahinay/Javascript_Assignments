function huntShows(event) {
    event.preventDefault();

    const seriesQuery = document.getElementById("seriesQuery").value;
    const apiEndpoint = `https://api.tvmaze.com/search/shows?q=${seriesQuery}`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(seriesData => {

             document.getElementById("searchResults").innerHTML = '';

            seriesData.forEach(tvShow => {
                const articleElement = document.createElement("article");

                const name = document.createElement("h2");
                name.textContent = tvShow.show.name;
                articleElement.appendChild(name);

                const url = document.createElement("a");
                url.textContent = "Details";
                url.href = tvShow.show.url;
                url.target = "_blank";
                articleElement.appendChild(url);

                const img = document.createElement("img");
                img.src = tvShow.show.image?.medium || 'no-image-available.png';
                img.alt = tvShow.show.name;
                articleElement.appendChild(img);

                const summary = document.createElement("div");
                summary.innerHTML = tvShow.show.summary;
                articleElement.appendChild(summary);

                document.getElementById("searchResults").appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error("Uh-oh, couldn't fetch data:", error);
        });
}

console.log("Lets see some shows?");

