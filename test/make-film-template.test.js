import makeFilmTemplate from '../src/film-detail-component.js';
const test = QUnit.test;

const film = {
    'title': 'Castle in the Sky',
    'release_date': 1986,
    'description': 'Lorem ipsum blah Lorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blah',
    'director': 'Hayao Miyazaki',
    'producer': 'Isao Takahata',
    'rt_score': 95
};

test('make film list template', assert => {
    const result = makeFilmTemplate(film);

    const expected = /*html*/`
    <dl id="film-detail">
            <dt>Title:</dt>
            <dd>Castle in the Sky</dd>
            <dt>Released:</dt>
            <dd>1986</dd>
            <dt>Description:</dt>
            <dd>Lorem ipsum blah Lorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blahLorem ipsum blah</dd>
            <dt>Director:</dt>
            <dd>Hayao Miyazaki</dd>
            <dt>Producer:</dt>
            <dd>Isao Takahata</dd>
            <dt>RT Score:</dt>
            <dd>95</dd>
        </dl>
    `;
    assert.htmlEqual(result, expected);
});