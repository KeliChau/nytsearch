  $(".placeholder").on("click", function() {

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; url += '?' + $.param({ 'api-key': "8db7e5f2f14e40afb811ff718ef5bd56"
  });
  
  console.log(url);

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
  
  console.log(result);
  
  }).fail(function(err) {
    throw err;
    });
  });

  $(document).ready(function(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
      'api-key': "8db7e5f2f14e40afb811ff718ef5bd56"
    });
    console.log(url);
  })