import api from './api.js'
import omdb from './omdb.js'
angular.module('starter.services', [])
.factory('Movies', function() {
   let fake =  [
        {
          imdb: 'tt2379713',
          user_rating: 8.7
        },
        {
          imdb: 'tt2249007',
          user_rating: 8.7
        },
        {
          imdb: 'tt3659388',
          user_rating: 1.0 
        },
        {
          imdb: 'tt0185906',
          user_rating: 8.7
        },
        {
          imdb: 'tt0903747',
          user_rating: 8.7
        },
        {
          imdb: 'tt0944947',
          user_rating: 1.0 
        }
      ] 
   let  requests = []
   fake.forEach(um => {
      requests.push(omdb.get(omdb.newOptions({ imdb: um.imdb }))) 
   })
  return {
    All: function() {
     return Promise.all(requests)
     .then(omdb.parseMovie)
    }
  }
})
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])
.factory('User', ['$localstorage', function($localstorage) {
  let token = $localstorage.get('token', '')
  let lists = []
  return {
    AllLists: function() {
      return api.UserLists(token)
    },
    NewList: function(list) {
      return api.AddList(list, t)
    },
    List: function(title) {
      return new Promise((resolve, reject) => {
        api.UserLists(token)
        .then(r => {
          let lists = JSON.parse(r.text) 
          lists.forEach( l => {
            if (l.title === title) {
              resolve(l)
            }
          })
        })
      })
    }
  }
}]);
