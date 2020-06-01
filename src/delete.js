//=======BTN Click Delete
export const deleteSelectedMovie = $('#deleteMovieBtn').click(function (e) {
    e.preventDefault();
    deleteMovie(movieObject());
    getMovies().then((movies) => {
        (renderMovies(movies));
    });
    $('#myEditForm')[0].reset();
});