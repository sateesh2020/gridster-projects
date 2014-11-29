var gridsterApp=angular.module('gridsterApp',[]);
gridsterApp.controller('gridsterCtrl',function ($scope){
      $scope.customItems = [
            { size: { x: 2, y: 1 }, position: [0, 0] },
            { size: { x: 2, y: 2 }, position: [0, 2] },
            { size: { x: 1, y: 1 }, position: [0, 4] },
            { size: { x: 1, y: 1 }, position: [0, 5] },
            { size: { x: 2, y: 1 }, position: [1, 0] },
            { size: { x: 1, y: 1 }, position: [1, 4] },
            { size: { x: 1, y: 2 }, position: [1, 5] },
            { size: { x: 1, y: 1 }, position: [2, 0] },
            { size: { x: 2, y: 1 }, position: [2, 1] },
            { size: { x: 1, y: 1 }, position: [2, 3] },
            { size: { x: 1, y: 1 }, position: [2, 4] }
      ];

});

