$(document).ready(function () {
    
    $(document).keypress(function(e) {
        if(e.which == 13) { 
           
           var searchTerm = $('#searchy').val();
           var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
            
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function(data){
                    $('#output').html('');
                for (var i = 0; i < data[1].length; i++) {
                    $('#output').prepend("<li><a href=" + data[3][i] + "><h4>" +  data[1][i] + "</h4><p>" + data[2][i] + "</p></a></li>");
                    
                    $('#centbox').css("top", "14%");
                    $('#resultati').css("top", "16%");
                }
                    
                    $('#searchy').val('');
            },
                error: function(errorMessage){
                alert("Error!");
            }      
            })

        };
    });
    
    
    
    $('.port').click(function() {
        window.open("http://l-emi.github.io/");
    });
    
    $('#randy').click(function() {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
    
});