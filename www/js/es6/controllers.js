import omdb from './omdb.js'
import api from './api.js'

angular.module('starter.controllers', [])
.controller('SignInCtrl', function($scope,  $state, $localstorage, $ionicPopup) {
   let showAlert = function(title, template) {
     let alertPopup = $ionicPopup.alert({
       title,
       template,
     })
     alertPopup.then((res) => {
     })
  }
  $scope.signIn = function(user) {
    api.LoginUser(user)
    .catch( e => console.log(`Handle error ${e}`) )
    .then(checkResponse)
    .then( t => {
      $localstorage.set('token', t)
      $state.go('lists')
    },
    ({error, errors}) => {
      if (errors) {
        let ems = errors.map(e => `<p> ${e} </p>`)
        showAlert('Validation Errors',ems )
      } else if (error) { 
        showAlert('Error', 'Incorrect input or credentials');
      } 
    })
  };
})
.controller('RegistCtrl', function($scope,  $state, $localstorage, $ionicPopup) {
   let showAlert = function(title, template) {
     let alertPopup = $ionicPopup.alert({
       title,
       template,
     })
     alertPopup.then((res) => {
     })
  }
  $scope.newUser = function(user) {
    api.RegisterUser(user)
    .catch( e => console.log(`Handle error ${e}`) )
    .then(checkResponse)
    .then( t => {
      $localstorage.set('token', t)
      $state.go('lists')
    },
    ({error, errors}) => {
      if (errors) {
        let ems = errors.map(e => `<p> ${e} </p>`)
        showAlert('Validation Errors',ems )
      } else if (error) { 
        showAlert('Error', 'Incorrect input or credentials');
      } 
    })
  };
})
.controller('NewListCtrl', function($scope, $state, $localstorage, $window,  User) {
  $scope.back = function() {
    $state.go('lists')
  }
  $scope.newList = function(list) {
    console.log(list)
      api.AddList(list, $localstorage.get('token', '')) 
                  .then(r => {
                    $state.go('lists')
                  })
                  .catch(e => {
                    console.log(e)
                  })
      }
})
.controller('ListsCtrl', function($scope, $state, $window, $ionicPopup, $localstorage, User) {
   let confirmPopup = (title, template) => { 
     return $ionicPopup.confirm({
       title,
       template,
     })
   }
  User.AllLists()
  .then((r) =>  {
    $scope.lists = JSON.parse(r.text)
    $scope.$apply()
  })
  $scope.logout = () => {
    $localstorage.set('token', '')
    $state.go('signin')
  }
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true
  $scope.newList = () => {
    $state.go('#/lists/new')
  }
  $scope.edit = (list) => {
    console.log(list)
  }
  $scope.delete = (list) => {
    confirmPopup('Delete', `Are you sure you want to delete list ${list.title}`)
    .then(res => {
      if (res) {
        api.DeleteList(list.id, $localstorage.get('token',''))
        $window.location.reload(true)
      }
    })
  }
})
.controller('ListCtrl', function(
  $scope, $state, $stateParams, $ionicHistory,
  User, Movies
  ) {
  $scope.back = function() {
    $state.go('lists')
  }
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true
  Movies.All().then(data => {
    $scope.movies = data
    $scope.$apply()
  })
  User.List($stateParams.title).then(l => {
    $scope.list = l
    $scope.$apply()
  })
});
let checkResponse = r => {
  return new Promise((resolve, reject) => {
    let { bearer, errors, error } = JSON.parse(r.text)
    if (error || errors)  {
      reject({error, errors})
    }
    if (bearer && bearer.length) {
      resolve(bearer)
    }
  })
}
function hanldeErrors({error, errors}) {
  if (error) incorrectCred(error);
  if (errors) validationErrors(errors);
}
let incorrectCred = e => {
  console.log('Incorrect credentials')
}
let validationErrors = e => {
  console.log('Validation errors', e)
}

