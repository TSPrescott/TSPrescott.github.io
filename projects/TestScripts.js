
var Button = document.getElementById("myBtn"),
    questionContainer = document.getElementById("qContainer"),
    currentQuestion = document.getElementById("mainQuestion"),
    myForm = document.getElementsByTagName("form"),
    A = document.getElementById("choiceA"),
    B = document.getElementById("choiceB"),
    C = document.getElementById("choiceC"),
    D = document.getElementById("choiceD"),
    answerArray = [A, B, C, D],
    choice = document.getElementsByName("userChoice"),
    round = 0,
    answerContainer = document.getElementById("qContainer");

var GameScore = {
    playerScore: 0,
    addPoint: function() {
        this.playerScore = this.playerScore + 1;
    },
    endMessage: function() {
        return "You got " + this.playerScore + " out of 10!";
    }
    
};

var gameQuestions = ["A dentist from Pennsylvania came up with the idea to strap small incendiary bombs to these animals. They would then be   released and, theoretically, cause fires in inaccessible target zones.", 
                     "This famous rock band briefly changed their name to Johnny & the Moondogs.", 
                     "This country's national animal is the unicorn.", "Who was once billed as The Atomic Powered Singer?", 
                     "Sesquipedalophobia is the fear of what?", 
                     "During World War II, the crew of the British submarine HMS Trident kept this animal aboard their vessel for six weeks.", "British Intelligence Agency MI6 launched an operation to disrupt an al-Qaeda produced magaizine aimed at recruiting 'lone-wolf' terrorists. They replaced an article detailing how to make a bomb with a recipe for these.", 
                     "During the early days of the telephone, operators would greet callers with this phrase.",
                    "Boanthropy is a psychological disorder in which the afflicted person believes he or she is this animal.",
                    "Cards Against Humanity purchased an island and renamed it this."];

var gameAnswers = [ 
            {
                A: "Pigeons",
                B: "Hawks",
                C: "Crows",
                D: "Bats"
            },
            {
                A: "The Beatles",
                B: "Led Zeppelin",
                C: "The Rolling Stones",
                D: "Crosby, Stills, And Nash"
            },
            
            {
                A: "Belgium",
                B: "Greece",
                C: "Scotland",
                D: "Ukraine"
            },
            
            {
                A: "David Bowie",
                B: "Elvis Presley",
                C: "Michael Jackson",
                D: "Joe Cocker"
            },
            {
                A: "Dinner Parties",
                B: "Long Words",
                C: "Opinions",
                D: "Belly Buttons"
            },
            
            {
                A: "Reindeer",
                B: "Horse",
                C: "Cow",
                D: "Mule"
            },
            
            {
                A: "Brownies",
                B: "Cupcakes",
                C: "Pancakes",
                D: "Granola Bars"
            },
            
            {
                A: "What do you want?",
                B: "May I help you?",
                C: "Well, are you there?",
                D: "Hello, beautiful soul."
            },
        
            {
                A: "Dog",
                B: "Cat",
                C: "Cow",
                D: "Snake"
            },
            
            {
                A: "Tiny Elephant Isle",
                B: "Regret",
                C: "Repression Isle",
                D: "Hawaii 2"
            }  
    ];





var showContent = function() {
    questionContainer.style.display = "block";
    Button.innerHTML = "Submit";
};


function GameEngine() {
    //change questions/answers while adhering to DRY
    var answerCheck = function(correctAnswer) {
        if (choice[correctAnswer].checked === true) {
            GameScore.addPoint();
        }
    };
 
           switch (round) {
               case 1: 
                   if (choice[3].checked === true) {
                       answerCheck(3);
                   }
                   break;
               case 2:
                   answerCheck(0);
                   break;
                case 3:
                   answerCheck(2);
                   break;
                case 4:
                   answerCheck(1);
                   break;
               case 5:
                   answerCheck(1);
                   break;
                case 6:
                   answerCheck(0);
                   break;
                case 7:
                   answerCheck(1);
                   break;
                case 8:
                   answerCheck(2);
                   break;
                case 9:
                   answerCheck(2);
                   break;
                case 10:
                   answerCheck(3);
                   break;
           }
    
    if (round < 10) {
        currentQuestion.innerHTML = gameQuestions[round];
        A.innerHTML = gameAnswers[round].A;
        B.innerHTML = gameAnswers[round].B;
        C.innerHTML = gameAnswers[round].C;
        D.innerHTML = gameAnswers[round].D;
    } else if (round === 10){
        answerContainer.style.display = "none";
        currentQuestion.innerHTML = GameScore.endMessage();
        console.log(GameScore.playerScore);
        Button.innerHTML = "Retry";
    } else {
        document.location.href = "";
    }
    
    console.log(GameScore.playerScore);
    round++;
    return false;
}
