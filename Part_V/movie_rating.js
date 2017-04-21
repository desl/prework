$(function(){

	// var sort by movie toggle
	// var sort by rating toggle
	var sortMovie = true;
	var sortRating = false;

	// var movie field
	// var rating field
	var $movieInput = $('#movieName');
    var $movieRating = $('#movieRating');
	// var add movie button.
	$addMovieButton = $('#addSubmit');
	var $delButtons = $('.delbuttons');

	// display stored data in the table
	displayMovies();

	// event listener on add movie button
	$addMovieButton.on('click', function(e){
	    addTableRow($movieInput.val(), $movieRating.val());
	    addToStorage($movieInput.val(), $movieRating.val());

        $movieInput.val("");
        $movieRating.val("");
    });


	//event listener on delete button: All buttons in tbody are delete buttons.
	$('tbody').on('click','.btn', function(e){
		var name = $(e.target).parent().parent().children().eq(0).text();
		var rating = $(e.target).parent().parent().children().eq(1).text();
		removeFromStorage({movie: name, rating: rating});
		$(e.target).parent().parent().remove()
		displayMovies();
	});

	//eventlistener on sort thead for sort buttons. All spans in thead are "buttons" in this way.
	$('thead').on('click','span', function(e){
		displayMovies($(e.target).attr('id'));
	});

	function removeFromStorage(removeObj){
		var listArr = JSON.parse(localStorage.getItem("Movies"));
		for (var i=0;i<listArr.length;i++){
			if (listArr[i].movie === removeObj.movie && listArr[i].rating === removeObj.rating){
				listArr.splice(i,1);
				break;
			}
		}
		localStorage.setItem("Movies", JSON.stringify(listArr));
		// call displayMovies?
	}

	function displayMovies(sortType){
		$('tbody').empty();

		var listArr = JSON.parse(localStorage.getItem("Movies"));

		if (listArr === null){
			return;
		}
		
		switch (sortType){
			case "ratingUp":
				listArr = listArr.sort(function(a,b){return parseInt(a.rating) < parseInt(b.rating)}); // ratings a-z
				break;
			case "ratingDown":
				listArr = listArr.sort(function(a,b){return parseInt(a.rating) > parseInt(b.rating)}); // ratings z-a
				break;
			case "movieDown":
				listArr = listArr.sort(function(a,b){return a.movie < b.movie}); // movies z-a
				break;
			default:
				listArr = listArr.sort(function(a,b){return a.movie > b.movie}); // movies a-z
		}

		for (var i=0;i<listArr.length;i++){
			addTableRow(listArr[i].movie, listArr[i].rating);
		}
	}
		
	function addTableRow(name, rating, arrayIndex){
		$newTableRow = $('<tr>');
        $newMovie = $('<td>');
        $newRating = $('<td>');
        $newTdButton = $('<td>');
        $delButton = $('<button>');

        $newMovie.text(name);
        $newRating.text(rating);

        $newMovie.addClass('text-center');
        $newRating.addClass('text-center');
        $newTdButton.addClass('text-center');

        $delButton.addClass('btn btn-danger delbutton');
        $delButton.text("Delete");

        var $tbody = $('tbody');
        $tbody.append($newTableRow);
        $newTableRow.append($newMovie);
        $newTableRow.append($newRating);
        $newTableRow.append($newTdButton);
        $newTdButton.append($delButton);
	}

	//event listener on sort by movie button
	//event listen on sort by rating button

	function addToStorage(name, rating){
      	//localStorage.setItem("Movies", JSON.stringify([{movie: name, rating: rating}]));

      	var listArr = JSON.parse(localStorage.getItem("Movies"));
      	if (listArr === null){
      		listArr = [];
      	}
        listArr.push({movie: name, rating: rating});
        localStorage.setItem("Movies", JSON.stringify(listArr));
        // wanna clear movies out of localStorage?
        //localStorage.removeItem('Movies');
	}
	// function to remove movie from localStorage


})