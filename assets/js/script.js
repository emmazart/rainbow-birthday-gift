// ---------- DECLARE GLOBAL VARIABLES START ---------- //
var buttonOriginal = document.querySelector(".btn-start"); // select Start Quiz button
var introP = document.querySelector("#intro-p"); // select intro p to hide
var quizQuestion = document.querySelector("#quiz-question"); // select h2 for question content
var buttonGroupEl = document.getElementById("button-group"); // select button group container
var quizContainer = document.getElementById("quiz-container"); // holds all quiz elements
var listContainer = document.getElementById("list-container"); // select element to add existing list to
var bucketListEl = document.getElementById("list"); // select ul element to hold list items
var currentQuestionIndex = 0; // for manually iterating through quiz aqusetions array
var questionText = document.getElementById("question-text"); 
var bucketList = [];

// ----------- DECLARE GLOBAL VARIABLES END ---------- //
var questionsArr = [
        {
            answer: ["Yes", "No"],
            listText: "go skydiving"
        },
]

// var questionsArr = [
//     {
//         answer: ["Yes", "No"],
//         listText: "go skydiving"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "run or bike a 5k"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "go to a drive in movie"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "do 10 random acts of kindness"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "try 10 new recipes this year"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "go hanggliding"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "go on a sunrise hike"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "take a cooking class in another country"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "see a favorite musician play live"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "learn a new sport"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "write a book"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "try to break a world record (silly or serious)"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "fly in a hot air balloon"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "have a fancy picnic"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "take a train cross country (or between countries in Europe)"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "stay in an overwater bungalow in Bora Bora"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "learn how to pilot a drone"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "watch every movie on the American Film Institue's Top 100"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "start a podcast"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "create a piece of public art (mural, yarnbombing, etc.)"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "reach out to someone who intimidates you"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "plant a tree"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "order everything off the menu at a restaurant (a SMALL one)"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "meet a penguin"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "play a game of paintball"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "go sand dune surfing"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "swim with dolphins"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "hug a redwood"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "take a beginner art class (pottery, painting, jewelry making)"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "write a song"
//     },
//     {
//         answer: ["Yes", "No"],
//         listText: "be a game show contestant"
//     }
// ];

// ---------- DEFINE LOAD QUESTION TO RUN THROUGH QUIZ QUESTIONS ARRAY ---------- //
var loadQuestion = function () {
    buttonGroupEl.innerHTML = ""; // clears buttonGroupEl
    var currentQuestion = questionsArr[currentQuestionIndex];
  
    // set the h2 text content equal to the question being asked
    let spantext = currentQuestion.listText;
    quizQuestion.innerHTML = `<h1 id="quiz-question" class="text-center">Would you like to...  <span id="question-text">${spantext}?</span></h1>`;
    var answer = currentQuestion.answer;
  
    // iterate through answers array to create individual buttons
    for (i = 0; i < 2; i++) {
      var buttons = document.createElement("input");
      buttons.type = "submit";
      buttons.className = "btn btn-primary btn-dynamic";
      buttons.id = [i];
      buttons.value = answer[i];
      buttonGroupEl.appendChild(buttons);
      console.log(buttons);
    }
  
    // on click event triggers answer validation
    buttonGroupEl.onclick = function (event) {
      let target = event.target;

      if (target.className === "btn btn-primary btn-dynamic") {
        console.log("CLICK");

        // if user answers yes
        if (event.target.value === "Yes") {
          // save to bucket list
          console.log("ADD TO BUCKET LIST");
          let newListItem = currentQuestion.listText;
          console.log(newListItem);
          bucketList.push(newListItem);
        } 
  
        // increment currentQuestionIndex by 1
        currentQuestionIndex++;
        // check to see if the quiz is over
        checkEndQuiz();
      }
    };
  };
  
  // ---------- CHECK IF WE NEED TO END THE QUIZ ---------- //
  var checkEndQuiz = function () {
    if (currentQuestionIndex === questionsArr.length) {
      endQuiz();
    } else {
      loadQuestion();
    }
  };
  
  // ---------- DEFINE END QUIZ FUNCTION ----------- //
  var endQuiz = function () {

    // restore button to original button
    buttonGroupEl.innerHTML = '<input class="btn btn-primary btn-start" type="submit" value="Start Over">'; // restore to original html

    // restore start quiz wording
    quizQuestion.innerHTML = "<h1 id='quiz-question' class='text-center'>Let's Make a <span id='question-text'>Bucket List!</span></h1>";

    // display new bucketlist & save to storage
    listContainer.style.display = "block";

    // loop through bucket list array
    for (var x of bucketList) {
        var item = document.createElement("li");
        item.innerText = x;
        item.classList = "text-center";
        bucketListEl.appendChild(item);
    }

    localStorage.setItem("bucketlist", JSON.stringify(bucketList));
};
  
var startQuiz = function () {
  console.log('click')
  // hide introP and buttonOriginal
  buttonOriginal.style.display = "none";
  introP.style.display = "none";
  questionText.style.display = "block";

  // if there is a list in local storage, render to page
//   var currentList = JSON.parse(localStorage.getItem("bucketlist"));
//   if (currentList) {
//       loadBucketList(currentList);
//   }

  // call loadQuestion function to begin quiz
  loadQuestion();
}

function loadBucketList(list) {

}

// ---------- EVENT LISTENERS ---------- //

// event listener for start quiz button
buttonOriginal.addEventListener("click", startQuiz);

loadBucketList();