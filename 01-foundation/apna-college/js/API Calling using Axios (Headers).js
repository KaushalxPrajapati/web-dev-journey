const url = 'https://icanhazdadjoke.com/';

async function getJokes() {
    try {
        const config = { headers: { Accept: 'application/json' } };
        let response = await axios.get(url, config);
        console.log(response.data.joke);
    } catch (e) {
        console.log(e);
    }
}

getJokes();
