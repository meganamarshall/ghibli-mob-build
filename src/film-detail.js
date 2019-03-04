import loadFilmDetails from './film-detail-component.js';

const URL = 'https://ghibliapi.herokuapp.com/films/';

const searchParams = new URLSearchParams(window.location.search);

const filmId = searchParams.get('id');

fetch(URL + filmId)
    .then(response => response.json())
    .then(film => {
        loadFilmDetails(film);
    })
    .catch(err => {
        console.error('fetch error:', err);
    });