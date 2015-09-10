(function(){
  var app = angular.module('weatherApp');
  
  var weatherSvc = function($http){
    
    var getCurrentWeather = function(city){
      // this returns the promise from the $http.get() request so it is now thennable
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial')
      
    }
    
    var getForecast = function(city){
      return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=imperial')
    }
    
    // the return is returning a reference to the getCurentWeather function, like a public function
    return {
      getCurrent: getCurrentWeather,
      getForecast: getForecast
    }
    
  }
  
  app.factory('weather', weatherSvc);
  
}())