/*global $ APIKEY*/
$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category:"business", country: "us", language: "en", apikey: APIKEY},
        success: function(data){
            if (data.status == "ok") {
                for (var i = 0; i < data.sources.length; i++) {
                   var source = document.createElement("OPTION"); 
                   source.setAttribute("value", data.sources[i].id)
                   source.innerHTML = data.sources[i].name;
                   document.getElementById('selection').appendChild(source);
                }
            }
        }
    })
   
    $('#source').submit(function(event) {
        event.preventDefault();
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources: document.getElementById('selection').value, category:"business", country: "us", language: "en", apikey: APIKEY},
            success: function(data2){
                if (data2.status == "ok") {
                    for (var i = 0; i < data2.articles.length; i++) {
                       var source = document.createElement("P"); 
                       source.innerHTML = data2.articles[i].title;
                       document.getElementById('display').appendChild(source);
                    }
                }
            }
        })
    })
})