import loadFilms from './film-list-component.js';
import loadHeader from '../header/header-component.js';

loadHeader(false);

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
    .then(response => response.json())
    .then(films => {
        loadFilms(films);
    })
    .catch(err => {
        console.error('fetch error:', err);
    });