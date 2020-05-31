const {getMovies} = require('./api.js');
const {addMovie} = require('./api.js');
const {editMovie} = require('./api.js');

getMovies().then((movies) => {
    $('#movieList').html("");
    renderMovies(movies)
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

function renderMovies(movies) {
    let html = '';
    movies.forEach(({title, rating, genre, id}) => {
        html += `<ul> 
<li data-attribute="SOME_ID">${title}  
<br>Rating: ${rating}  
<br>Genre: ${genre}  
<br><span style ="visibility: hidden;" id="data" data-attribute="SOME_ID">${id}</span></li>
<hr>
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


//click li and console.log title rating genre id
//e.target target what was click
//jquery select e.target using $(e.target)
// traverse the dom to pull out the title, rating, genre, id (if needed, include the id of the          .......us:(maybe reduce)
// add the id of the movie using the data attribute like data-id=SOME_ID to an element in the li

// once you have the title, rating, genre, id create a new movie object and pass that to your editMovie function
// edit movie function

//==========Edit Movie
let movieArr;

$("#movieList").on('click', 'ul', function (e) {
    e.preventDefault();
    let target = e.target;
    let targetText = ($(target).text());
    movieArr = targetText.split('  ');

    $('#renderTitle').val(movieArr[0]);
    $('#renderRating').val(movieArr[1].split(' ')[1]);
    $('#renderGenre').val(movieArr[2].split(' ')[1]);
});

function movieObject() {
    let title = (movieArr[0]);
    let ratingNum = ((movieArr[1].split(' ')[1]));
    let genreRating = (movieArr[2].split(' ')[1]);
    let idNum = (movieArr[3]);

    return {
        "title": title,
        "rating": ratingNum,
        "genre": genreRating,
        "id": idNum
    }
}

//on btn click update
$('editMovieBtn').click(function (e) {
    e.preventDefault();
    editMovie(movieObject());
    getMovies().then((movies) => {
        (renderMovies(movies));
    });
    $('#myForm')[0].reset();
});







