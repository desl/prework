/*
1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
3. Remove the last paragraph in the article.
4. Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.
5. Add an item to the list; it can say whatever you want.
6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
8. Add an event listener so that when you click on the image, it is removed from the DOM.
*/

$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!"); //1
    $('article img').addClass("image-center"); // 2
    $('article p:last-child').remove(); // 3
    $('#title').css("font-size", Math.random()*100); // 4
    var $anotherLi = $('<li>',{
        text: "This is the new item"
    });
    $('aside ol').append($anotherLi); // 5
    $('aside').empty();
    var $newParagraph = $('<p>', {
        text: "This is an apology for that list. It was silly"
    });
    $('aside').append($newParagraph); // 6
    
    $('input').on('input',function(e){
        //console.log('Changed!');
        // new value for color
        //console.log($(e.target).val());
        // Now, is it red, blue, or green?
        //console.log($(e.target).index());

        var $findMe = $(e.target).parent();
        var $parent = $findMe.parent();
        var result = $parent.index($findMe); // Returning -1, should return 0, 1, or 2 for red, blue, green
        var result = $findMe.parent().children().index($findMe) // seems to work.
        //console.log(result);

        // We have to get values for each.
        var cssString = "rgb(";
        for (var i = 0; i<3; i++){
            //Determine value:
            currentValue = $findMe.parent().children().eq(i).children().eq(0).val();
            cssString += currentValue;
            cssString += ",";

            /*
            if( i === result){

            }
            $findMe.parent().children().eq(i).children().eq(0).val()
            */
        }
        // take off last comma of cssString
        cssString = cssString.substring(0, cssString.length - 1);
        // close parens of cssString
        cssString +=")";

        //debugger;
           // Set the background color of the color table:
        //$('.row').eq(1).css('background-color', 'rgb(255,255,255)');
        $('.row').eq(1).css('background-color', cssString);
    });

    $('img').on('click',function(e){
        $(e.target).remove();
    });

 

    /*
    $("#logo-events").on("click", function(e){
        console.log($(e.target).val()); // This works great.
        console.log("captured event");
    });
    */
});