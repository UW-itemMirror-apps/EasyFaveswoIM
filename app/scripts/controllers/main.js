'use strict';

/**
 * @ngdoc function
 * @name easyFavesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easyFavesApp
 */
angular.module('easyFavesApp')
	 
  .controller('MainCtrl', function ($scope, $modal,$log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/modal.html',
      controller: 'ModalInstanceCtrl',
      //size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });    
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
	//added

    // Assigning array sections ForURL to sectionPane to be used in HTML pages 
    $scope.sectionPane = sectionsForURL;

    //Initilizing display value to false so as to hide the editpane name function 
    $scope.display = false;

    // Creating a new pane object and initilizing it to blank.
    // When we create a new pane this blank object is used by html page to 
    // add new pane and its properties
    //$scope.newPane = {};
    //$scope.newlinks = [''];
        
    // Function to edit name
    $scope.editPaneTitle = function(newName){
	    $scope.setPaneTitle(newName);
	    $scope.toggleDisplay();
    };

    // sub function to set pane title
    $scope.setPaneTitle = function(newName){
    	$scope.sectionPane.sectionTitle = newName.sectionTitle;
    };    
  
  	// Function to toggle value of display
  	$scope.toggleDisplay = function(){  		
  		$scope.display = !$scope.display;
   	};  

   	//function to remove URL Aditi
   	$scope.removeUrl = function(linkItem, paneItem){
   		var selected;
   		
   		$scope.selected = $scope.sectionPane[paneItem];
   		$scope.selected.urlProperties.splice(linkItem,1);
   		//alert($scope.selected.urlProperties.title);
   	};
  	
  	$scope.removePane = function(linkItem){  
  		$scope.sectionPane.splice(linkItem,1);    		
   	};

   	// $scope.createPane = function(newPane,sectionPane){   		   		
   	// 	$scope.newlinks.push({'title':+newItemNo});  
   	// 	$scope.sectionPane.push($scope.newPane); 
   	// 	$scope.newPane = {};   		
   	// };	
  });

// 1shared srvice for modal
angular.module('easyFavesApp')
    .service('sharedProperties', function () {
        var newUrlProperties;

        return {
            getProperty: function () {
                return property;
            },
            setUrlProperty: function(value) {
                newUrlProperties = value;
                alert('saved');
            }
        };
    });
//End of shared service

angular.module('easyFavesApp')
.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.newUrlProps = newUrlProperties;
  $scope.newPane = {}; 	
  
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

$scope.addFields = function () {  
  $scope.newUrlProps.push({title:'',url:''});  
}
    
  $scope.removeChoice = function() {
    var lastItem = $scope.newUrlProps.length-1;
    $scope.newUrlProps.splice(lastItem);
  };

  function Ctrl2($scope, sharedProperties) {
    $scope.both = sharedProperties.setUrlProperty($scope.newUrlProps);
}

var newPaneProperties= [];
$scope.createNewPane = function(newPane, newUrlProps) {
	alert(newPane);
	alert(newUrlProps);
	// debugger;
// 	$scope.newUrlProps.push({title:'',url:''});  
// 	$scope.newPaneProperties.push({section: newPane.sectionTitle, urlProperties: [title: newUrlProps.title, url: newUrlProps.url]})
// alert(newPaneProperties);
// 	debugger;

   	$scope.newPane = {};
	$scope.ok();
  };

});	


	var newUrlProperties=[];

  	var sectionsForURL = [
	{
		sectionTitle: 'Socializing Sites',
		urlProperties:[
		{
			title: 'Facebook',
			url: 'https://www.facebook.com/',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/desktop.jpeg'
		
		},
		{
			title: 'Twitter',
			url: 'https://twitter.com/',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/shop.jpg'

		 },
		 {
			title: 'Gmail',
			url: 'https://mail.google.com/mail/ca/u/2/#inbox',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/shop.jpg'
		 }
		 ]
	},
	{
		sectionTitle: 'Utilities',
		urlProperties:[
		{
			title: 'seattle gov',
			url: 'http://www.seattle.gov/',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/desktop.jpeg'
		
		},
		{
			title: 'Phone bill',
			url: 'https://my.t-mobile.com/login.html',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/shop.jpg'

		 },
		 {
			title: 'light bill',
			url: 'http://www.seattle.gov/light/paymybill/',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/shop.jpg'

		 }
		 ]
	},
	{	
		sectionTitle: 'Coding Sites',
		urlProperties:[
		 {
			title: 'GitHub',
			url: 'https://github.com/',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/shop.jpg'

		 },
		 {
			title: 'w3schools',
			url: 'http://www.w3schools.com/',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/shop.jpg'

		 },
		 {
			title: 'stackoverflow',
			url: 'http://www.w3schools.com/',
			label: '',
			// images: '/ashayNirgudePortfolio/app/images/shop.jpg'

		 }
		 ]
	}
	];
