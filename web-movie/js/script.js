function searchMovie() {
    $('#movie-list').html('');

    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'e30f7f12',
            's' : $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies  = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4 mb-3">
                        <div class="card">
                      <img src="` + data.Poster + `" class="card-img-top">
                      <div class="card-body">
                      <h5 class="card-title">` + data.Title + `</h5>
                      <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                      <a href="#" class="text-decoration-none">See Detail</a>
                      </div>
                      </div>
                    </div>
                    `)
                });

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                <div class="col">
                <h1 class"text-center">' + result.Error + '</h1>
                </div>
                `)
            }
        }
    });
}

$('#search-button').on('click', function () {
    
    searchMovie();

});