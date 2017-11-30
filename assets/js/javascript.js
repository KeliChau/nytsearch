  $(document).ready(function(){

    $("#submit").on(function(e){
      e.preventDefault();
      var searchTerm=$("#search-term").val();
      var startYear=$("#start-year").val();
      var endYear=$("#end-year").val();
    })

    $(".placeholder").on("click", function() {

      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; url += '?' + $.param({ 'api-key': "8db7e5f2f14e40afb811ff718ef5bd56"
    });
    
    console.log(url);

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) 
    
    console.log(result);
    
    }).fail(function(err) {
      throw err;
      });
    });

    var results = $("#submit");

      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
        'api-key': "8db7e5f2f14e40afb811ff718ef5bd56"
      });
      console.log(url);


  })