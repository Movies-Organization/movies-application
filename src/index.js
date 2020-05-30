const {getMovies} = require('./api.js');
const {addMovie} = require('./api.js');
const {editMovie} = require('./api.js');

getMovies().then((movies) => {
    renderMovies(movies)
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

function renderMovies(movies) {
    let html = '';
    movies.forEach(({title, rating, genre}) => {
        html +=
            `<ul> 
    <li data-attribute="SOME_ID">${title}<br>rating: ${rating}<br>genre: ${genre}</li>
    </ul>`;
    });
    $('#movieList').html(html);
    $('li').addClass('indMovie');
}


//movie post

function newMovieObject(title, rating, genre) {
    let userMovieTitle = $('.title').val();
    let userMovieStars = $('#movieRating').val();
    let userMovieGenre = $('#movieGenre').val();

    const newMovie = {
        'title': userMovieTitle,
        'rating': userMovieStars,
        'genre': userMovieGenre
    };
    return newMovie;
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
// traverse the dom to pull out the title, rating, id (if needed, include the id of the          .......us:(maybe reduce)
// add the id of the movie using the data attribute like data-id=SOME_ID to an element in the li

// once you have the title, rating, genre, id create a new movie object and pass that to your editMovie function



$("#movieList").on('click','ul',function(e) {
    e.preventDefault();
    let target = e.target;
    // console.log($(target));
    let movieString = ($(target)[0].innerHTML);
    let movieArray = (movieString.split('<br>'));
    let movieNewString = movieArray.join();
    let newMovieObject = JSON.parse("movieNewString");

    console.log(movieNewString);

//$(target)[0].dataset.attribute

    // console.log(editMovie(movieArray));

});






