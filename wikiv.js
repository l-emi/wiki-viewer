$(document).ready(function () {
    
    //on pressing the enter key
    $(document).keypress(function(e) {
        if(e.which == 13) { 
           
           //take the search term the user entered
           var searchTerm = $('#searchy').val();
           //use it to make an ajax call
           var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
            
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function(data){
                    //display the results
                    $('#output').html("");
                for (var i = 0; i < data[1].length; i++) {
                    $('#output').prepend("<li><a href=" + data[3][i] + "><h4>" +  data[1][i] + "</h4><p>" + data[2][i] + "</p></a></li>");
                    
                    $('#centbox').css("top", "14%");
                    $('#resultati').css("top", "16%");
                }
                    
                    $('#searchy').val("");
            },
                error: function(errorMessage){
                alert("Error!");
            }      
            })

        };
    });
    
    
    /****************
    * Outgoing links
    *****************/
    //portfolio
    $(".port").click(function() {
        window.open("http://l-emi.github.io/");
    });
    
    //click Random to be taken to a random Wikipedia article
    $("#randy").click(function() {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
    
});