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
    <li data-attribute="SOME_ID">${title}  <br>rating: ${rating }  <br>genre: ${genre}</li>
    </ul>`;
    });
    $('#movieList').html(html);
    $('li').addClass('indMovie');
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
function renderForm(arr){
    $('#renderTitle').val(arr[0]);
    $('#renderRating').html(arr[1].split(' ')[1]);
    $('#renderGenre').html(arr[2].split(' ')[1]);
}

$("#movieList").on('click', 'ul', function (e) {
    e.preventDefault();
    let target = e.target;
    let targetText = ($(target).text());
    console.log(targetText);
    let movieArray = (targetText.split('  '));
    return renderForm(movieArray);
    // console.log(movieArray);

});







