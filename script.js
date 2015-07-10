var bestieBattle = angular.module('bestieBattle', []);

bestieBattle.controller('battleController', ['$scope', '$interval',
      function($scope, $interval) {
        $scope.warriors = ['Trent','Craig','Eric','Reggie','TJ','Alex','Steve','Zane','Roundy','Devin'];
        $scope.specialItems = ["Trent's Fightstick","Craig's Greenscreen","Eric's love for Aquaman","Reggie's Mechanical Keyboard","TJ's WoW Authenticator","Alex's Game breaking bug","Steve's Insulin","Zane's Employee discount","Roundy's Comic book collection","Devin's Motorcycle"];
        $scope.things = ['a sewing machine', 'a car', 'an old boot', 'a sick rhyme', 'a truth bomb', 'a spitball', 'a frisbee', 'a boring story', 'a cricket bat', 'a box of chalk', 'a soft pillow', 'a t-shirt cannon', 'some stickey notes', 'a chunk of sidewalk', 'gourmet food poisoning', 'a cease and desist', 'a rolled up rug', 'a participation trophy', 'dryer lint', 'a CRT monitor', 'leg warmers', 'soy sauce packets', 'a briefcase full of money', 'a studded leather jacket', 'unparalleled accuracy', 'family therapy' ]; 
        $scope.playerOne = {};
        $scope.playerTwo = {};
        $scope.roundCount = 0;
        $scope.logs = [
          'About to begin'
          ];

        // things to do when you start the game
        $scope.start = function() {
            $scope.setupPlayers();
            console.log($scope.playerOne.name + ' with ' + $scope.playerOne.item);
            console.log($scope.playerTwo.name + ' with ' + $scope.playerTwo.item);
        };
    
        $scope.setupPlayers = function() {
        //set modifiers
        $scope.playerOne.healthMod = 0;
        $scope.playerOne.attackMaxMod = 0;
        $scope.playerOne.defenseMaxMod = 0;
        $scope.playerOne.currentAttackMod = 0;
        $scope.playerOne.currentDefenseMod = 0;
        $scope.playerOne.healMod = 0;
        $scope.playerOne.name = $scope.warriors[Math.floor((Math.random() * $scope.warriors.length))];
        $scope.playerOne.item =  $scope.specialItems[Math.floor((Math.random() * $scope.specialItems.length))];
        $scope.playerOne.attackMax = (Math.floor((Math.random() * 100))) + $scope.playerOne.attackMaxMod;
        $scope.playerOne.defenseMax = (Math.floor((Math.random() * 100))) + $scope.playerOne.defenseMaxMod;
        
        $scope.playerOne.difference = 0;
        $scope.playerOne.drawitem = $scope.playerOne.item.toLowerCase().replace(/[^a-z]/g,'')

        $scope.playerTwo.healthMod = 0;
        $scope.playerTwo.attackMaxMod = 0;
        $scope.playerTwo.defenseMaxMod = 0;
        $scope.playerTwo.currentAttackMod = 0;
        $scope.playerTwo.currentDefenseMod = 0;
        $scope.playerTwo.healMod = 0;
        $scope.playerTwo.name = $scope.warriors[Math.floor((Math.random() * $scope.warriors.length))];
        $scope.playerTwo.item =  $scope.specialItems[Math.floor((Math.random() * $scope.specialItems.length))];
        $scope.playerTwo.attackMax = (Math.floor((Math.random() * 100))) + $scope.playerTwo.attackMaxMod;
        $scope.playerTwo.defenseMax = (Math.floor((Math.random() * 100))) + $scope.playerTwo.defenseMaxMod;
        
        $scope.playerTwo.difference = 0;
        $scope.playerTwo.drawitem = $scope.playerTwo.item.toLowerCase().replace(/[^a-z]/g,'')

        switch($scope.playerOne.item){
          
          case "Trent's Fightstick":
          $scope.playerOne.attackMaxMod = 25;
          $scope.playerOne.defenseMaxMod = -10;
          break;
          case "Craig's Greenscreen":
          $scope.playerOne.defenseMaxMod = 10;
          break;
          case "TJ's WoW Authenticator":
          $scope.playerOne.attackMaxMod = 10;
          break;
          case "Eric's love for Aquaman":
          $scope.playerOne.defenseMaxMod = 25;
          $scope.playerOne.attackMaxMod = -10;
          break;
          case "Roundy's Comic book collection":
          $scope.playerOne.healthMod = 10; 
          break;
          case "Steve's Insulin":
          $scope.playerOne.healthMod = 25; 
          break;
          case "Reggie's Mechanical Keyboard":
          $scope.playerOne.currentAttackMod = 5; 
          break;
          case "Zane's Employee discount":
          $scope.playerOne.currentDefenseMod = 5; 
          break;
          case "Roundy's Comic book collection":
          $scope.playerOne.healMod = 2; 
          break;
          case "Devin's Motorcycle":
          $scope.playerOne.healthMod = 50;
          $scope.playerOne.healMod = -5; 
          break;
          case "Alex's Game breaking bug":
          $scope.playerOne.currentAttackMod = 5;
          $scope.playerOne.currentDefensekMod = 5;
          $scope.playerOne.healMod = -1;
          break;
        }
        
          switch($scope.playerTwo.item){
          
          case "Trent's Fightstick":
          $scope.playerTwo.attackMaxMod = 25;
          $scope.playerTwo.defenseMaxMod = -10;
          break;
          case "Craig's Greenscreen":
          $scope.playerTwo.defenseMaxMod = 10;
          break;
          case "TJ's WoW Authenticator":
          $scope.playerTwo.attackMaxMod = 10;
          break;
          case "Eric's love for Aquaman":
          $scope.playerTwo.defenseMaxMod = 25;
          $scope.playerTwo.attackMaxMod = -10;
          break;
          case "Roundy's Comic book collection":
          $scope.playerTwo.healthMod = 10; 
          break;
          case "Steve's Insulin":
          $scope.playerTwo.healthMod = 25; 
          break;
          case "Reggie's Mechanical Keyboard":
          $scope.playerTwo.currentAttackMod = 5; 
          break;
          case "Zane's Employee discount":
          $scope.playerTwo.currentDefenseMod = 5; 
          break;
          case "Roundy's Comic book collection":
          $scope.playerTwo.healMod = 1; 
          break;
          case "Devin's Motorcycle":
          $scope.playerTwo.healthMod = 50;
          $scope.playerTwo.healMod = -3; 
          break;
          case "Alex's Game breaking bug":
          $scope.playerTwo.currentAttackMod = 5;
          $scope.playerTwo.currentDefensekMod = 5;
          $scope.playerTwo.healMod = -2;
          break;
        }
        
        $scope.playerOne.health = 100 + $scope.playerOne.healthMod;
        $scope.playerTwo.health = 100 + $scope.playerTwo.healthMod;
        
        $scope.noSolo();
    };
    
    // make sure a player isn't fighting themselves like an idiot
    $scope.noSolo = function() {
       if ($scope.playerOne.name === $scope.playerTwo.name || $scope.playerOne.item === $scope.playerTwo.item) {
         $scope.setupPlayers();
       } else {
         $scope.drawPlayers();
       }
    };
    
    // draw the player on the canvas
    $scope.drawPlayers = function() {
        // draw player 1
        $scope.playerOneCanvas = document.getElementById("p1");
        $scope.ctxp1 = $scope.playerOneCanvas.getContext("2d");
        $scope.playerOneSource = document.getElementById($scope.playerOne.name.toLowerCase());
        $scope.ctxp1.drawImage($scope.playerOneSource, 0, 0, 240, 360);
    
        // draw player 2
        $scope.playerTwoCanvas = document.getElementById("p2");
        $scope.ctxp2 = $scope.playerTwoCanvas.getContext("2d");
        $scope.playerTwoSource = document.getElementById($scope.playerTwo.name.toLowerCase() + '2');
        $scope.ctxp2.drawImage($scope.playerTwoSource, 0, 0, 240, 360);
      
        // draw items
        $scope.playerOneItemCanvas = document.getElementById("p1");
        $scope.ctxp1 = $scope.playerOneItemCanvas.getContext("2d");
        $scope.playerOneItemSource = document.getElementById($scope.playerOne.drawitem);
        $scope.ctxp1.drawImage($scope.playerOneItemSource, 120, 270, 100, 91);
        
        $scope.playerTwoItemCanvas = document.getElementById("p2");
        $scope.ctxp2 = $scope.playerTwoItemCanvas.getContext("2d");
        $scope.playerTwoItemSource = document.getElementById($scope.playerTwo.drawitem);
        $scope.ctxp2.drawImage($scope.playerTwoItemSource, 0, 270, 100, 91);
      
      // explanations of modifiers
        //$scope.explanation = {
          //trentsfightstick: $scope.specialItems[0] + ' raises the max possible attack roll by ' + $scope.playerTwo.attackMaxMod + ' at the expense of ' + $scope.playerTwo.defenseMaxMod + ' to the max possible defense roll',
          //craigsgreenscreen: $scope.specialItems[1] + ' raises the max possible defense roll by ' + $scope.playerTwo.defenseMaxMod,
          //ericsloveforaquaman: $scope.specialItems[2] + ' raises the max possible defense roll by ' + $scope.playerTwo.defenseMaxMod + ' at the expense of ' + $scope.playerTwo.attackMaxMod + ' to the max possible attack roll',
          //reggiesmechanicalkeyboard: $scope.specialItems[3] + ' raises EVERY attack roll by ' + $scope.playerTwo.currentAttackMod,
          //tjswowauthenticator: $scope.specialItems[4] + ' raises max health by ' + $scope.playerTwo.attackMaxMod,
          //alexsgamebreakingbug: $scope.specialItems[5] + ' raises EVERY attack roll by ' + $scope.playerTwo.currentAttackMod + ' and EVERY defense roll by ' + $scope.playerTwo.currentDefensekMod + ", however it subtracts " + $scope.playerTwo.healMod + ' health EACH round',
          //stevesinsulin: $scope.specialItems[6] + ' raises max health by ' + $scope.playerTwo.healthMod,
          //zanesemployeediscount: $scope.specialItems[7] + ' raises EVERY defense roll by ' + $scope.playerTwo.currentDefenseMod,
          //roundyscomicbookcollection: $scope.specialItems[8] + ' adds ' + $scope.playerTwo.healMod + ' health EACH round',
          //devinsmotorcycle: $scope.specialItems[9] + ' lets you live fast and die young by giving an additional ' + $scope.playerTwo.healthMod + ' health, but then subtracts ' + $scope.playerTwo.healMod + ' EVERY round',
        //};
      
        $scope.fight()
        console.log($scope.playerOne);
        console.log($scope.playerTwo);

    };

        var stop;
        $scope.fight = function() {

      // Don't start a new fight if we are already fighting
      if ( angular.isDefined(stop) ) return;

      stop = $interval(function() {
        
      $scope.playerOne.currentAttack = Math.floor((Math.random() * $scope.playerOne.attackMax)); // player 1 attack roll
      $scope.playerOne.currentDefense = Math.floor((Math.random() * $scope.playerOne.defenseMax)); // player 1 defense roll
      $scope.playerTwo.currentAttack = Math.floor((Math.random() * $scope.playerTwo.attackMax)); // player 2 attack roll
      $scope.playerTwo.currentDefense = Math.floor((Math.random() * $scope.playerTwo.defenseMax)); // player 2 defense roll
      $scope.playerOne.difference = $scope.playerOne.currentAttack - $scope.playerTwo.currentDefense; // set pl attack - defense
      $scope.playerTwo.difference = $scope.playerTwo.currentAttack - $scope.playerOne.currentDefense; // set p2 attack - defense
          
      // player one deals damage
      if ($scope.playerOne.difference > 0){
        $scope.playerTwo.health = $scope.playerTwo.health - $scope.playerOne.difference;
        $scope.randomThang = Math.floor((Math.random() * $scope.things.length));
        $scope.logs.unshift($scope.playerOne.name + ' hits ' + $scope.playerTwo.name + ' with ' + $scope.things[$scope.randomThang] + ' for ' + $scope.playerOne.difference + ' damage' );
      }
      // player two deals damage
      if ($scope.playerTwo.difference > 0){
        $scope.playerOne.health = $scope.playerOne.health - $scope.playerTwo.difference;
        $scope.randomThing = Math.floor((Math.random() * $scope.things.length));
        $scope.logs.unshift($scope.playerTwo.name + ' hits ' + $scope.playerOne.name + ' with ' + $scope.things[$scope.randomThing] + ' for ' + $scope.playerTwo.difference + ' damage' );
      }
      // player one misses
      if ($scope.playerOne.difference <= 0){
        //$scope.logs.unshift( $scope.playerOne.name + ' misses');
      }
      // player two misses
      if ($scope.playerTwo.difference <= 0){
        //$scope.logs.unshift( $scope.playerTwo.name + ' misses');
      }
      
      console.log($scope.playerOne);
      console.log($scope.playerTwo);
        
        // check if the game is over
      if ($scope.playerOne.health <= 0 && $scope.playerTwo.health > 0) {
        $scope.logs.unshift($scope.playerTwo.name + ' has won!');
        $scope.stopFight();
      }
      if ($scope.playerTwo.health <= 0 && $scope.playerOne.health > 0) {
        $scope.logs.unshift($scope.playerOne.name + ' has won!');
        $scope.stopFight();
      } 
      if ($scope.playerTwo.health <= 0 && $scope.playerOne.health <= 0) {
        $scope.logs.unshift('we have a tie');
        $scope.stopFight();
      } 
      // Each round health modifier items do their effect here
      $scope.playerOne.health = $scope.playerOne.health + $scope.playerOne.healMod;
      $scope.playerTwo.health = $scope.playerTwo.health + $scope.playerTwo.healMod;
        // advance the round
         $scope.roundCount++;
      }, 3000);
    };
    // Stop the fight
    $scope.stopFight = function() {
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
      }
    };

    $scope.$on('$destroy', function() {
      // Make sure that the interval is destroyed too
      $scope.stopFight();
    });
  }]);