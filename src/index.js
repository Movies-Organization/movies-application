const {getMovies} = require('./api.js');
const {addMovie} = require('./api.js');
const {editMovie} = require('./api.js');
const {deleteMovie} = require('./api.js');

getMovies().then((movies) => {
    $('#movieList').html("");
    renderMovies(movies)
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

//=========Render Form
function renderMovies(movies) {
    let html = '';
    movies.forEach(({title, rating, genre, id}) => {
        html += `<ul> 
<li>${title}  <br>Rating: ${rating}  <br>Genre: ${genre}  <br><span style ="display: none;" id='id'>${id}</span></li>
    </ul>`;
    });
    $('#movieList').html(html);
}

//===========Add movie
function newMovieObject() {
    return {
        'title': $('.title').val(),
        'rating': $('#movieRating').val(),
        'genre': $('#movieGenre').val()
    };
}

$('.addMovieBtn').click(function (e) {
    e.preventDefault();
    addMovie(newMovieObject());
    getMovies().then((movies) => {
        (renderMovies(movies));
    });
    $('#myForm')[0].reset();
});

//==========Edit Movie
let movieArr;

$("#movieList").on('click', 'li', function (e) {
    e.preventDefault();
    let target = e.target;
    let targetText = ($(target).text());
    movieArr = targetText.split('  ');
    $('#renderTitle').val(movieArr[0]);
    $('#renderRating').val(movieArr[1].split(' ')[1]);
    $('#renderGenre').val(movieArr[2].split(' ')[1]);
});

function movieObject() {
    return {
        'title': $('#renderTitle').val(),
        'rating': $('#renderRating').val(),
        'genre': $('#renderGenre').val(),
        'id': movieArr[3]
    }
}

//=======BTN Click Update
$('#editMovieBtn').click(function (e) {
    e.preventDefault();
    editMovie(movieObject());
    getMovies().then((movies) => {
        (renderMovies(movies));
    });
    $('#myEditForm')[0].reset();
});

//=======BTN Click Delete
$('#deleteMovieBtn').click(function (e) {
    e.preventDefault();
    deleteMovie(movieObject());
    getMovies().then((movies) => {
        (renderMovies(movies));
    });
    $('#myEditForm')[0].reset();
});