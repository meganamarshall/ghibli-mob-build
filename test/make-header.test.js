import { makeHeader } from '../src/header/header-component.js';
const test = QUnit.test;


test('make correct header template with link', assert => {
    const header = /*html*/
    `<section id="header-section">
    <img id="logo" src="assets/logo.png">
    <h1>Films</h1>
    <a href="index.html" id="all-films-link">
        All Films
    </a>
    </section>`;

    const result = makeHeader(true);

    assert.htmlEqual(result, header);
});

test('make correct header template without link', assert => {
    const header = /*html*/
    `<section>
    <img id="logo" src="assets/logo.png">
    <h1>Films</h1>
    </section>`;

    const result = makeHeader(false);

    assert.htmlEqual(result, header);
});