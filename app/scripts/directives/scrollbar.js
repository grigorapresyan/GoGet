angular.module('gogetApp')
  .directive('scrollbar', function () {
    return {
      restrict: 'A',
      scope: true,
      link: function scrollbar(scope, element, attrs) {
      	element.mCustomScrollbar({
		      theme:"minimal-dark"
		    });
      	element.addClass('mCustomScrollbar');
      }
    }
});