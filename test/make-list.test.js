const test = QUnit.test;

function makeListOfFilms(film) {
    const html = /*html*/
    `
    <li><a href="">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
test('make list of films', assert => {
    const film = {
        'title': 'Castle in the Sky',
        'release_year': 1986
    };

    const result = makeListOfFilms(film);

    const expected = /*html*/
    `
    <li><a href="">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;

    assert.htmlEqual(result, expected);
});