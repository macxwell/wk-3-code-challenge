document.addEventListener('DOMContentLoaded', function() {
    const films = {
        "films":[
            {
                "Id":"1",
                "Title":"Horizon: An American saga",
                "Genre":"Western, Drama",
                "Casts":" Colin Cunningham, Abbey Lee, Jeff Fahey, Danny Huston, Giovanni Ribisi",
                "Duration":"181 min",
                "Description":"Explore the lure of the Old West and how it was won—and lost—through the blood, sweat and tears of many. Spanning the four years of the Civil War, from 1861 to 1865, embark on an emotional journey across a country at war with itself, experienced through the lens of families, friends and foes all attempting to discover what it truly means to be the United States of America.",
                "Production":"Territory Pictures",
                "Tickets sold":"112",
                "Showtime":"2200hrs",
                "Poster":"https://img.moviesjoy.is/resize/188x288/f0/af/f0afd035a72c07ecb73b304711538906/f0afd035a72c07ecb73b304711538906.jpg"
            }, 
            {
                "Id":"2",
                "Title":"Descendants: The rise of Red",
                "Genre":"Fantasy, Adventure, Family, Comedy",
                "Casts":"Dara Reneé, Alex Boniello, Joshua Colley, Jeremy Swift, Ruby Rose Turner",
                "Duration":"94 min",
                "Description":"After the Queen of Hearts incites a coup on Auradon, her rebellious daughter Red and Cinderella's perfectionist daughter Chloe join forces and travel back in time to try to undo the traumatic event that set Red's mother down her villainous path.",
                "Production":"Walt Disney Television",
                "Tickets sold":"68",
                "Showtime":"1600hrs",
                "Poster":"https://img.moviesjoy.is/resize/188x288/b9/87/b9879fcc063c04555257f8b8c245c5d3/b9879fcc063c04555257f8b8c245c5d3.jpg"
            },
            {
                "Id":"3",
                "Title":"The Inheritance",
                "Genre":"Horror",
                "Casts":"Rachel Nichols, Austin Stowell, Bob Gunton, Reese Alexander, David Walton",
                "Duration":"64 min",
                "Description":"Billionaire Charles Abernathy, on the eve of his 75th birthday, invites his four estranged children back home out of fear that tonight someone or something is coming to kill him. To ensure his family will help protect him from whatever’s coming, Abernathy puts each of their inheritances on the line – they’ll get nothing if he’s found dead by dawn.",
                "Production":"Paul Schiff Productions",
                "Tickets sold":"40",
                "Showtime":"1000hrs",
                "Poster":"https://img.moviesjoy.is/resize/188x288/3a/6d/3a6da456951c8fef71d896bd7bb7a00b/3a6da456951c8fef71d896bd7bb7a00b.jpg"
            },
            {
                "Id":"4",
                "Title":"The Cigarette",
                "Genre":"Horror",
                "Casts":" Darian Caine, Tina Krause, Sarah Marable, Valerie Bittner, Philip Green",
                "Duration":"82 min",
                "Description":"Deadly laced cigarettes cause chaos and death in New York City",
                "Production":"Purgatory Blues LLC",
                "Tickets sold":"51",
                "Showtime":"1200hrs",
                "Poster":"https://img.moviesjoy.is/resize/188x288/d0/4a/d04a2b25363f42f119b156f7cb4915b9/d04a2b25363f42f119b156f7cb4915b9.jpg"
            },
            {
                "Id":"5",
                "Title":"Sausage Party: Foodtopia",
                "Genre":" Animation, Comedy, Action & Adventure, Sci-Fi & Fantasy",
                "Casts":"Edward Norton, Seth Rogen, Michael Cera, Kristen Wiig,",
                "Duration":"24 min per episode",
                "Description":"After killing off all of humanity, Food attempts to create their own utopia.",
                "Production":" Point Grey Pictures, Annapurna Television, Sony Pictures Television Studios, Amazon MGM Studios, Sony Pictures Television",
                "Tickets sold":"sold out",
                "Showtime":"1800hrs",
                "Poster":"https://img.moviesjoy.is/resize/188x288/1d/6d/1d6d5abfb6ea7aaea505ff24ea24281a/1d6d5abfb6ea7aaea505ff24ea24281a.jpg"
            }
        ]
    };

    const movieListElement = document.getElementById('movieList');

    films.films.forEach(function(movie) {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const posterImg = document.createElement('img');
        posterImg.src = movie.Poster;
        posterImg.alt = `${movie.Title} Poster`;
        posterImg.width = 94; // Adjust as needed
        posterImg.height = 144; // Adjust as needed
        movieElement.appendChild(posterImg);

        const movieDetails = document.createElement('div');
        movieDetails.classList.add('movie-details');

        const titleElement = document.createElement('h2');
        titleElement.textContent = movie.Title;
        movieDetails.appendChild(titleElement);

        const genreElement = document.createElement('p');
        genreElement.innerHTML = `<span>Genre:</span> ${movie.Genre}`;
        movieDetails.appendChild(genreElement);

        const castsElement = document.createElement('p');
        castsElement.innerHTML = `<span>Cast:</span> ${movie.Casts}`;
        movieDetails.appendChild(castsElement);

        const durationElement = document.createElement('p');
        durationElement.innerHTML = `<span>Duration:</span> ${movie.Duration}`;
        movieDetails.appendChild(durationElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = `<span>Description:</span> ${movie.Description}`;
        movieDetails.appendChild(descriptionElement);

        const productionElement = document.createElement('p');
        productionElement.innerHTML = `<span>Production:</span> ${movie.Production}`;
        movieDetails.appendChild(productionElement);

        const ticketsSoldElement = document.createElement('p');
        ticketsSoldElement.innerHTML = `<span>Tickets sold:</span> ${movie['Tickets sold']}`;
        movieDetails.appendChild(ticketsSoldElement);

        const showtimeElement = document.createElement('p');
        showtimeElement.innerHTML = `<span>Showtime:</span> ${movie.Showtime}`;
        movieDetails.appendChild(showtimeElement);

        const ticketButton = document.createElement('button');
        ticketButton.textContent = 'Buy Tickets';
        ticketButton.classList.add('ticket-button');
        // Example of adding a click event listener to the ticket button
        ticketButton.addEventListener('click', function() {
            alert(`You clicked Buy Tickets for ${movie.Title}`);
            // Replace alert with actual functionality to buy tickets
        });
        movieDetails.appendChild(ticketButton);

        movieElement.appendChild(movieDetails);
        movieListElement.appendChild(movieElement);
    });
});
