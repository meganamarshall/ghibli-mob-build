export default function makeListOfFilms(film) {
    const html = /*html*/
    `
    <li><a href="">${film.title}</a><span class="year"> (${film.release_date})</span></li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}