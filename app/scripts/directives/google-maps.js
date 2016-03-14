'use strict';

/**
 * @ngdoc directive
 * @name gogetApp.directive:googleMaps
 * @description
 * # googleMaps
 */
angular.module('gogetApp')
  .directive('googleMaps', function () {
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attrs) {
        var map;
        var marker;

        function placeMarker(location) {
          if (marker) {
            marker.setPosition(location);
          } else {
            marker = new google.maps.Marker({
              position: location,
              map: map
            });
          }
          console.log(location.lat(), location.lng())
        }

        function initialize () {
            var mapProp = {
                zoom:10,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(angular.element(element)[0], mapProp);
            if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(function (position) {
                     var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                     map.setCenter(initialLocation);
                     placeMarker(initialLocation);
                 });
            } else {
                console.log("Geolocation is not supported.");
                alert("Geolocation is not supported.");
            }

            google.maps.event.addListener(map, 'click', function(event) {
                placeMarker(event.latLng);
            });
        }

        initialize();

      }
    };
  });
