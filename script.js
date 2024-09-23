const query = `
  query {
    Page(page: 1, perPage: 10) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
        siteUrl
      }
    }
  }
`;

fetch('https://graphql.anilist.co', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ query })
})
  .then(response => response.json())
  .then(data => {
    const animeList = document.getElementById('anime-list');
    data.data.Page.media.forEach(anime => {
      const animeItem = document.createElement('div');
      animeItem.classList.add('anime');
      animeItem.innerHTML = `
        <img src="${anime.coverImage.large}" alt="${anime.title.romaji}">
        <h2>${anime.title.romaji}</h2>
        <a href="${anime.siteUrl}" target="_blank">More Info</a>
      `;
      animeList.appendChild(animeItem);
    });
  })
  .catch(error => console.error('Error:', error));
