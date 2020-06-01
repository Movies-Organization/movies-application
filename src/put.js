//==========Edit Movie
let movieArr;

const clickMovie = function() {
    $("#movieList").on('click', 'ul', function (e) {
        e.preventDefault();
        let target = e.target;
        $(target).toggleClass('highlight');
        let targetText = ($(target).text());
        movieArr = targetText.split('  ');
        $('#renderTitle').val(movieArr[0]);
        $('#renderRating').val(movieArr[1].split(' ')[1]);
        $('#renderGenre').val(movieArr[2].split(' ')[1]);
    });
};

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function movieObject() {
    let title = capitalizeFirstLetter($('#renderTitle').val());
    return {
        'title': title,
        'rating': $('#renderRating').val(),
        'genre': $('#renderGenre').val(),
        'id': movieArr[3]
    }
}

const updateMovie = function() {
    $('#editMovieBtn').click(function (e) {
        e.preventDefault();
        editMovie(movieObject());
        getMovies().then((movies) => {
            (renderMovies(movies));
        });
        $('#myEditForm')[0].reset();
    });
};

module.exports ={clickMovie, createdNewMovie, updateMovie, caps };