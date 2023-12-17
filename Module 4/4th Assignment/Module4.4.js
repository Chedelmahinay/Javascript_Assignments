function huntShows(event) {
    event.preventDefault();

    const seriesQuery = document.getElementById("userSearchInput").value;
    const apiEndpoint = `https://api.tvmaze.com/search/shows?q=${seriesQuery}`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(seriesData => {
            document.getElementById("searchResults").innerHTML = '';

            seriesData.forEach(tvShow => {
                const article = document.createElement("article");

                const name = document.createElement("h2");
                name.textContent = tvShow.show.name;
                article.appendChild(name);

                const url = document.createElement("a");
                url.textContent = "Details";
                url.href = tvShow.show.url;
                url.target = "_blank";
                article.appendChild(url);

                const img = document.createElement("img");
                const imgUrl = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
                img.src = imgUrl;
                img.alt = tvShow.show.name;
                article.appendChild(img);

                const summary = document.createElement("div");
                summary.innerHTML = tvShow.show.summary; // Note: Using innerHTML to preserve HTML tags in summary
                article.appendChild(summary);

                document.getElementById("searchResults").appendChild(article);
            });
        })
        .catch(error => {
            console.error("Uh-oh, couldn't fetch data:", error);
        });
}

console.log("Lets see some shows?");

