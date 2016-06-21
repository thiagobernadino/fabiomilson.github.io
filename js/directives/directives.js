angular.module('myDirectives', [])
.directive('postCard', function () { 

    var ddo = {};

    ddo.restrict = "AE"; // Atribute and Element  

    /**
     * Matem filhos da minha directive
     */
    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/post-card.html';
    /**
     * Scope da diretiva
     */
    ddo.scope = { 
        title: '@',
        summary: '@',
        url: '@',
        color: '@'
    };
    return ddo;
});