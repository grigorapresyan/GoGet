angular.module('gogetApp')
  .directive('stellar', function () {
    return {
      restrict: 'A',
      scope: true,
      link: function stellar(scope, element, attrs) {
        console.log('ya zdes!');

      }
    }
});