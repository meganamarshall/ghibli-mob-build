import makeListOfFilms from '../src/film-list-component.js';
const test = QUnit.test;

test('make list of films', assert => {
    const film = {
        'title': 'Castle in the Sky',
        'release_date': 1986
    };

    const result = makeListOfFilms(film);

    const expected = /*html*/
    `
    <li><a href="">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;

    assert.htmlEqual(result, expected);
});