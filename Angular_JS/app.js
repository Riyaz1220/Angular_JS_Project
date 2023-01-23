var app = angular.module('app',['ngRoute']);


// routing
app.config(function($routeProvider){
  $routeProvider
  .when('/',{templateUrl:'defaultpage.html', controller:'defaultpage'})
  .when('/aboutus',{templateUrl:'aboutus.html', controller:'aboutus'})
  .when('/contactus',{templateUrl:'contactus.html', controller:'contactus'})
}); 


// custom service 1

// app.service('searchservice', function(http){
//   this.fullname = "full name here"
// });



// home page default
app.controller('homepage', function ($scope){
    $scope.MainHeading = 'My Heading',
    $scope.testdate = new Date();
    $scope.testnews = [
      {type: 'Weather News'},
      {type: 'Sports News'},
      {type: 'Political News'},
      {type: 'Business News'}
    ]
});

// home page default
app.controller('defaultpage', function ($scope){
  $scope.MainHeading = 'My Heading',


  $scope.testnews = [
    {
      type: 'Business News',
      author: 'Michael Akuchie',
      urlToImage: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/kIA-ev6-rear.jpg",
      description:
        'South Korean automaker Kia is simplifying the transition to electric vehicles through a quiz that helps people to find a perfect match.',
    },
    {
        type: 'Business News',
        author: 'Michael Akuchie',
        urlToImage: "https://d32r1sh890xpii.cloudfront.net/article/718x300/2022-11-17_c6gwd8b2yt.jpg",
        description:
        'South Korean automaker Kia is simplifying the transition to electric vehicles through a quiz that helps people to find a perfect match.',
    },
    {
        type: 'Business News',
        author: 'Michael Akuchie',
        urlToImage: "https://d3i6fh83elv35t.cloudfront.net/static/2022/02/newswrapmusk-1024x683.jpg",
        description:
        'South Korean automaker Kia is simplifying the transition to electric vehicles through a quiz that helps people to find a perfect match.',
    },
    {
        type: 'Business News',
        author: 'Michael Akuchie',
        urlToImage: "https://cleantechnica.com/files/2022/07/IMG_0197.jpg",
        description:
        'South Korean automaker Kia is simplifying the transition to electric vehicles through a quiz that helps people to find a perfect match.',
    },
    {
        type: 'Business News',
        author: 'Michael Akuchie',
        urlToImage: "https://images.mktw.net/im-669260/social",
        description:
        'South Korean automaker Kia is simplifying the transition to electric vehicles through a quiz that helps people to find a perfect match.',
    },
    {
        type: 'Business News',
        author: 'Michael Akuchie',
        urlToImage : "https://static.independent.co.uk/2022/11/17/21/SpaceX-Firings_42325.jpg?quality=75&width=1200&auto=webp",
        description:
        'South Korean automaker Kia is simplifying the transition to electric vehicles through a quiz that helps people to find a perfect match.',
    },
  ]
});

// about us page
app.controller('aboutus', function(){

})


// contact us page
app.controller('contactus', function ($scope) {

  // $scope.fullname = 'Full Name';
  // $scope.phone = '000-000-00';
  // $scope.email = 'test@email.com';

  $scope.master = {firstName:"John", lastName:"Doe", phoneNumber:'000-000-00', message:"Enter text here..."};
  $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
  };
  $scope.reset();

  // $scope.fullname = searchservice.fullname;
  // $scope.$watch('fullname', function(){
  //   searchservice.fullname = $scope.fullname;
  // })
  
  });



// Custom Directive
app.directive('subHeading',function(){
    return{
        template: 'Welcome to our Angular.Js test site'
    };
});


// Form validation


// app.directive('myDirective', function() {
//   return {
//       require: 'ngModel',
//       link: function(mCtrl) {
//           function myValidation(value) {
//               if (value.indexOf("e") > -1) {
//                   mCtrl.$setValidity('charE', true);
//               } else {
//                   mCtrl.$setValidity('charE', false);
//               }
//               return value;
//           }
//           mCtrl.$parsers.push(myValidation);
//       }
//   };
// });







