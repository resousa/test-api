
$.ajax({
    url: "https://api.eventful.com/json/events/search?keywords=books&location=Seattle&date=Future&app_key=BLG28fCFksPJcL7s",

    method: 'GET'
   })
    // After the data comes back from the API
    .then(function(response) {
        console.log(response);
      // Storing an array of results in the results variable
    });