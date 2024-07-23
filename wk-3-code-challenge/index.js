document.addEventListener('DOMContentLoaded', function() {
    fetch('./db.json')
    .then(response => response.json())
    .then(data => {
        const app = document.getElementById('app');
        data.films.forEach(film => {
            const filmElement = document.createElement('div');
            filmElement.className = 'film clearfix';
            filmElement.innerHTML = `
                <img src="${film.Poster}" alt="${film.Title}">
                <h2>${film.Title}</h2>
                <p><strong>Genre:</strong> ${film.Genre}</p>
                <p><strong>Duration:</strong> ${film.Duration}</p>
                <p><strong>Description:</strong> ${film.Description}</p>
                <p><strong>Casts:</strong> ${film.Casts}</p>
                <p><strong>Showtime:</strong> ${film.Showtime}</p>
            `;
            app.appendChild(filmElement);
        });
    })
    .catch(error => console.error('Error loading the films:', error));
});