window.onload = function(){

    
	// If there's nothing in storage, let's put a sample item in there so you know how to use this
    if (!JSON.parse(localStorage.getItem("Status"))){
    	localStorage.setItem("List", JSON.stringify(["Sample Item"]));
   		localStorage.setItem("Status", JSON.stringify([""]));
    }

    var form = document.getElementById("formToDo");
    var $form = $('#formToDo');

    var submit = document.getElementById("addSubmit");
    var $submit = $('#addSubmit');
    var list = document.getElementById('list');
    var $list = $('#list');

    $submit.on('click', function(e){
        var $myInput = $('#itemName');
        addToStorage($myInput.val(), "blank");
        $myInput.val("");
    });

    $list.on('click',function(e){
        if (! e.target ){
            return false;
        }

        var action = $(e.target).attr('id')[0];
        var number = $(e.target).attr('id');
        number = number.substr(1); // cut off the prepended character telling us what action to take.

        if (action === 'c'){
            $(e.target).parent().css('text-decoration', 'line-through');
            //read the status array
            var statusArr = JSON.parse(localStorage.getItem("Status"));
            // put 'complete' into the status array at index number
            statusArr[number] = "c";
            // save the status array
            localStorage.setItem("Status", JSON.stringify(statusArr));
        }

        if (action === 'd'){
            $(e.target).parent().remove();
            deleteItem(number);
        }

    });

    listFromStorage();

// Everything below here is functions.

	function deleteItem(number){
        var $li = $("i" + number);
        $li.remove();

		var listArr = JSON.parse(localStorage.getItem("List"));
		var statusArr = JSON.parse(localStorage.getItem("Status"));
        statusArr[number] = "d";
        localStorage.setItem("List", JSON.stringify(listArr));
        localStorage.setItem("Status", JSON.stringify(statusArr));
	}

	function clearList(){
        $list.empty();
	}

	function addToStorage(item,status){
		var listArr =[];
		listArr = JSON.parse(localStorage.getItem("List"));
		var statusArr = [];
		statusArr = JSON.parse(localStorage.getItem("Status"));
		listArr.push(item);
		statusArr.push(status);
		localStorage.setItem("List", JSON.stringify(listArr));
		localStorage.setItem("Status", JSON.stringify(statusArr));
		listFromStorage();
	}

	function listFromStorage(){
		clearList();
		var listArr = JSON.parse(localStorage.getItem("List"));
		var statusArr = JSON.parse(localStorage.getItem("Status"));

		for (var i = 0 ; i < listArr.length; i++){
            if (statusArr[i] !== 'd'){ // d === deleted items, we can skip!

                var $li = $('<li>');

                var idString = "i" + i;
                $li.attr('id', idString);

        		if (statusArr[i] === 'c'){
                    $li.css('text-decoration', 'line-through');
        		}

                $li.addClass('list-group-item');

                var $completeButton = $('<button>');
                $completeButton.text('Complete');
                $completeButton.addClass('btn btn-success');
                $completeButton.attr('id', "c" + i );

                $li.append($completeButton);

                var $deleteButton = $('<button>');
                $deleteButton.text('Delete');
                $deleteButton.addClass('btn btn-danger');
                $deleteButton.attr('id', "d" + i );

                $li.append($deleteButton);

                var $span = $('<span>');
                $span.text(listArr[i]);
                //$span.addClass('lead');
                $li.append($span);

                $list.append($li);
            }
    	}	
	}
}