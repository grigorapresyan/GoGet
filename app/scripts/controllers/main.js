'use strict';

/**
 * @ngdoc function
 * @name gogetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gogetApp
 */
angular.module('gogetApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    // $("#containerTest").mCustomScrollbar({
    //     theme:"dark"
    // });
    $(document).foundation();

    $scope.setActive = function (bar){
    	console.log(bar);
    }
        $.stellar({
    horizontalScrolling: false
        });
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
  }]);
