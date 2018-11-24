app.factory('piposervice', ['$http', function($http) {
	return $http.get('https://spreadsheets.google.com/feeds/cells/1KlxyKWMUh7O4pkd4XDqK3FwjcKBxR5I94jugpFsah2I/od6/public/full?alt=json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);