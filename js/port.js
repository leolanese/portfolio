var myApp = window.angular.module('myApp', []);


myApp.controller('MainCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.skill1 = 'javascript';
    $scope.skill2 = 'HTML5';
    $scope.skill3 = 'CSS3';
    $scope.skill4 = 'RWD';
    $scope.skill5 = 'MVC';
    $scope.skill6 = 'TDD/BDD';

}]);

myApp.controller('LabelCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.name = "I'm Leo.";
    $scope.jobTitle = "I'm a Front-end Developer";
    $scope.do = "I build websites";
    $scope.am = "I am a front-end developer mobile web strategist and am located in London, UK. I am a passion " +
                "developer how enjoy create a better code for a better world and improve experiences to look and " +
                "work beautifully across any environment that can access the web."
    $scope.workLocation = "I'm in London, UK";
}]);

myApp.controller('FooterCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.t6 = "Blog";
    $scope.t7 = "Twitter";
    $scope.t8 = "e-mail";
}]);

myApp.controller('LogoCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.t9 = "leo lanese web";

}]);


setInterval(window.drawCircle, 2);
