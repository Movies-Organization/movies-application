
//=========Render Form
const movieList = function renderMovies(movies) {
    let html = '';
    movies.forEach(({title, rating, genre, id}) => {
        html += `<ul>
<li><span id="title">${title}</span>  <br><span id="rating">Rating: ${rating}</span>  <br><span id="genre">Genre: ${genre}</span>  <br><span style ="display: none;" id='id'>${id}</span></li><hr><hr>
    </ul>`;
    });
    $('#movieList').html(html);
};

module.exports = {movieList};