// Fetch data from local JSON file
fetch('anime-data.json')
    .then(response => response.json())
    .then(data => {
        const animeList = document.getElementById('anime-list');
        data.forEach(anime => {
            // Create anime item element
            const animeItem = document.createElement('div');
            animeItem.classList.add('anime');
            animeItem.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <h2>${anime.title}</h2>
                <a href="${anime.url}" target="_blank">More Info</a>
            `;
            animeList.appendChild(animeItem);
        });
    })
    .catch(error => console.error('Error fetching anime data:', error));
