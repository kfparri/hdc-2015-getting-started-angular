(function(){
  var app = angular.module('weatherApp'); // don't need [] because weatherApp was already created in script.js

  // creating this controller
  var weatherCtrl = function($http, weather) {
    // scope lets me talk to the view
    // vm is the view model
    var vm = this;
   //vm.message = "Hello to the class";
    
    var onComplete = function(results) {
      console.log(results);
      vm.city = results.data.name;
      vm.temp = results.data.main.temp;
      vm.desc = results.data.weather[0].description;
      vm.icon = "http://openweathermap.org/img/w/" + results.data.weather[0].icon + ".png";
      
      // this is my service
      weather.getForecast(vm.city).then(onForecast, onError)
    }
    
    var onForecast = function(results) {
      vm.forecast = results.data.list;
    }
    
    var onError = function(error){
      // never will get called..
      vm.message = "An error has ocurred";
    }
    
    vm.search = function(city){
      weather.getCurrent(city).then(onComplete, onError)
    }
  }


  app.controller('weatherCtrl', weatherCtrl);
}())