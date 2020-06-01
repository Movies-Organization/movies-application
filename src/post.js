const {addMovie} = require('./api.js');
const {getMovies} = require('./api.js');
const {renderList} = require('./moviesList');

// renderList.movieList();
//===========Add movie
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function newMovieObject() {
    let title = capitalizeFirstLetter($('.title').val());
    return {
        'title': title,
        'rating': $('#movieRating').val(),
        'genre': $('#movieGenre').val()
    };
}

const createMovie = function () {
    ('#addMovieBtn').click(function (e) {
        e.preventDefault();
        addMovie(newMovieObject());
        getMovies().then((movies) => {
            (renderMovies(movies));
        });
        $('#myForm')[0].reset();
    });
};

module.exports = {createMovie, newMovie, caps};