angular.module("pokeList",[]),angular.module("pokeList").component("pokeList",{templateUrl:"js/angular/poke-list/poke-list.template.html",controller:["$http",function(e){var o=this;o.orderProp="id",o.types=["bug","dragon","electric","fairy","fire","flying","grass","ground","normal","poison","water"],e.get("js/angular/pokemons.json").then(function(e){o.pokemons=e.data})}]}),angular.module("pokeDetail",["ngRoute"]),angular.module("pokeDetail").component("pokeDetail",{templateUrl:"js/angular/poke-detail/poke-detail.template.html",controller:["$http","$routeParams",function(e,o){var t=this;this.pokeName=o.pokeName,e.get("pokemons/"+o.pokeName+".json").then(function(e){t.pokemon=e.data})}]}),angular.module("pokeApp",["ngRoute","pokeList","pokeDetail"]),angular.module("pokeApp").config(["$locationProvider","$routeProvider",function(e,o){e.hashPrefix("!"),o.when("/pokemons",{template:"<poke:list></poke:list>"}).when("/pokemons/:pokeName",{template:"<poke:detail></poke:detail>"}).otherwise("/pokemons")}]);