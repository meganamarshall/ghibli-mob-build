import { makeListOfFilms } from '../src/film-list/film-list-component.js';
const test = QUnit.test;

test('make list of films', assert => {
    const film = {
        'title': 'Castle in the Sky',
        'release_date': 1986,
        'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe'
    };

    const result = makeListOfFilms(film);

    const expected = /*html*/
    `
    <li><a href="film-detail.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;

    assert.htmlEqual(result, expected);
});