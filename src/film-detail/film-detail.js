import loadFilmDetails from './film-detail-component.js';

import loadHeader from '../header/header-component.js';

loadHeader(true);

const URL = 'https://ghibliapi.herokuapp.com/films/';

const searchParams = new URLSearchParams(window.location.search);

const filmId = searchParams.get('id');

if(!filmId) {
    window.location = './';
}

fetch(URL + filmId)
    .then(response => response.json())
    .then(film => {
        loadFilmDetails(film);
    })
    .catch(err => {
        /* eslint-disable-next-line */
        console.error('fetch error:', err);
    });