function getRandomJoke(event) {
    event.preventDefault();

    const srch = document.getElementById("srch").value;
    const apiUrl = `https://api.chucknorris.io/jokes/search?query=${srch}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            showJokes(data.result);
        })
        .catch(error => {
            console.error('Oops! Failed to fetch Chuck Norris jokes:', error);
        });
}

function showJokes(jokes) {
    const storage = document.getElementById("jokes");

    storage.innerHTML = '';

    jokes.forEach(joke => {
        const article = document.createElement("article");
        const allofit = document.createElement("p");
        allofit.textContent = joke.value;
        article.appendChild(allofit);
        storage.appendChild(article);
    });
}
