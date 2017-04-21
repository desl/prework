$(function(){

    
	// If there's nothing in storage, let's put a sample item in there so you know how to use this
    if (!JSON.parse(localStorage.getItem("Todo"))){
        localStorage.setItem("Todo", JSON.stringify([{item: "Sample Item", status: ""}]));
    }

    var $form = $('#formToDo');
    var $submit = $('#addSubmit');
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
            var listArr = JSON.parse(localStorage.getItem("Todo"));
            // put 'complete' into the status array at index number
            listArr.status = "c";
            // save the status array
            localStorage.setItem("Todo", JSON.stringify(listArr));
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

        var listArr = JSON.parse(localStorage.getItem("Todo"));
        listArr[number].status = "d";
        localStorage.setItem("Todo", JSON.stringify(listArr));
	}

	function clearList(){
        $list.empty();
	}

	function addToStorage(newItem,newStatus){
        var listArr = JSON.parse(localStorage.getItem("Todo"));
        listArr.push({item: newItem, status: newStatus});
        localStorage.setItem("Todo", JSON.stringify(listArr));
		listFromStorage();
	}

	function listFromStorage(){
		clearList();

        var listArr = JSON.parse(localStorage.getItem("Todo"));

		for (var i = 0 ; i < listArr.length; i++){
            if (listArr[i].status !== 'd'){ // d === deleted items, we can skip!

                var $li = $('<li>');

                var idString = "i" + i;
                $li.attr('id', idString);

                if (listArr[i].status === 'c'){
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
                $span.text(listArr[i].item);
                $li.append($span);

                $list.append($li);
            }
    	}	
	}
});