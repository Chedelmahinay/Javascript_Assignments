function getRandomJoke() {
    const jokeApiEndpoint = 'https://api.chucknorris.io/jokes/random';

    fetch(jokeApiEndpoint)
        .then(response => response.json())
        .then(jokeData => {
            const chuckNorrisJoke = jokeData.value;
            console.log('Hilarious Chuck Norris Joke:', chuckNorrisJoke);
        })
        .catch(error => {
            console.error('Error fetching Chuck Norris joke:', error);
        });
}

getRandomJoke();

