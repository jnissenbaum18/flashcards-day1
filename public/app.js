var app = angular.module("FlashCards", [])

app.controller("FlashCardController", function ($scope, $timeout) {
	$scope.answered = false
	$scope.answeredCorrectly
	$scope.answerQuestion = function (answer) {

		if ($scope.answered) return;
		$scope.answered = true
		
		if (answer.correct) {
			$scope.answeredCorrectly = true
		}
		
		//$scope.currentIndex++
		
		console.log($scope.current.question)

		$timeout(function(){
			//$scope.current = $scope.flashCards[$scope.currentIndex];
			$scope.flashCards.push($scope.flashCards.shift())
			$scope.answered = false;
			$scope.answeredCorrectly = null
			$scope.current = $scope.flashCards[0]
		}, 2000)
	}
})

app.controller("MainController", function($scope){
	$scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
        ]
    }
	];
	//$scope.currentIndex = 0
	$scope.current = $scope.flashCards[0];
})