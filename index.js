const chalk = require('chalk');
const readlineSync = require('readline-sync');

let userName = readlineSync.question("What's your name? ");

emptyLine();
console.log('Hi ' + chalk.yellowBright.bold.underline(userName) + ',' + chalk.bgRed.bold(' Welcome to Marvel Cinematic Universe! \n'));

console.log("This game tests your knowledge on" + chalk.yellow.bold(" MARVEL ") + "Cinemas \n");

let playerScore = 0;

let highestScores = [
  {
    name: "Robert",
    score: 14
  }, {
    name: "Bruce",
    score: 12
  }, {
    name: "Stan Lee",
    score: 12
  }
];

const messageStyle1 = chalk.bgGrey.whiteBright;
const messageStyle2 = chalk.bgYellowBright.blackBright.bold;
const messageStyle3 = chalk.cyanBright.bold;
const messageStyle4 = chalk.red.italic.bold;

if (readlineSync.keyInYN(chalk.cyanBright('Do you want to start? '))) {
  function play(questions) {
    emptyLine();
    for (let i = 0; i < questions.length; i++) {
      let currentQuestion = questions[i].question;
      let currentOption = questions[i].options;
      let currentAnswer = questions[i].answer;
      emptyLine();
      console.log(chalk.blueBright.bold(currentQuestion));
      index = readlineSync.keyInSelect(currentOption, "Your Answer: ", { cancel: false });
      emptyLine();
      if (currentOption[index] == currentAnswer) {
        playerScore += 1;
        console.log(chalk.green("Wohhoooo! That's right\n"));
      } else {
        console.log(chalk.red("Never Mind!\n"));
      }
    }
    console.log(chalk.cyan("Score: ") + chalk.whiteBright(playerScore) + '\n');
  }

  questionairre1 = [{
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    options: [2005, 2008, 2010, 2012],
    answer: 2008
  }, {
    question: "What is the name of Thor’s hammer?",
    options: ["Vanir", "Mjolnir", "Aesir", "Norn"],
    answer: "Mjolnir"
  }, {
    question: "In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
    options: ["That he wants to study The Hulk", "That he knows about S.H.I.E.L.D.", "That they are putting a team together", "That Thaddeus owes him money"],
    answer: "That they are putting a team together"
  }, {
    question: "What is Captain America’s shield made of?",
    options: ["Adamantium", "Vibranium", "Promethium", "Carbonadium"],
    answer: "Vibranium"
  }, {
    question: "The Flerkens are a race of extremely dangerous aliens that resembles what?",
    options: ["Cats", "Ducks", "Reptiles", "Raccoons"],
    answer: "Cats"
  }];

  questionairre2 = [{
    question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
    options: ["H.O.M.E.R.", "J.A.R.V.I.S.", "A.L.F.R.E.D.", "M.A.R.V.I.N."],
    answer: "J.A.R.V.I.S."
  }, {
    question: "What is the real name of the Black Panther?",
    options: ["T’Challa", "M’Baku", "N’Jadaka", "N’Jobu"],
    answer: "T’Challa"
  }, {
    question: "What is the alien race Loki sends to invade Earth in The Avengers?",
    options: ["The Chitauri", "The Skrulls", "The Kree", "The Flerkens"],
    answer: "The Chitauri"
  }, {
    question: "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
    options: ["Thor", "Loki", "The Collector", "Tony Stark"],
    answer: "Loki"
  }, {
    question: "What fake name does Natasha use when she first meets Tony?",
    options: ["Natalie Rushman", "Natalia Romanoff", "Nicole Rohan", "Naya Rabe"],
    answer: "Natalie Rushman"
  }];

  questionairre3 = [{
    question: "What does Thor want another of when he’s in the diner?",
    options: ["A slice of pie", "A pint of beer", "A stack of pancakes", "A cup of coffee"],
    answer: "A cup of coffee"
  }, {
    question: "Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?",
    options: ["The Cotton Club", "The Stork Club", "El Morocco", "The Copacabana"],
    answer: "The Stork Club"
  }, {
    question: "About which city do Hawkeye and Black Widow often reminisce?",
    options: ["Budapest", "Prague", "Istanbul", "Sokovia"],
    answer: "Budapest"
  }, {
    question: "Who does the Mad Titan sacrifice to acquire the Soul Stone?",
    options: ["Nebula", "Ebony Maw", "Cull Obsidian", "Gamora"],
    answer: "Gamora"
  }, {
    question: "What is the name of the little boy Tony befriends while stranded in the Iron Man 3?",
    options: ["Harry", "Henry", "Harley", "Holden"],
    answer: "Harley"
  }];


  play(questionairre1);
  continueLevel2();

  emptyLine();
  console.log(messageStyle3("Thankyou for playing the game!! \n"));

  console.log("---------------------------");
  console.log(chalk.yellow.bold("LeaderBoard"));
  console.log("---------------------------");
  for (let i = 0; i < highestScores.length; i++) {
    let scoresList = highestScores[i];
    console.log(scoresList.name + ': ' + scoresList.score);
  }
  console.log("--------------------------- \n");

  function checkScore(score) {
    let check = false;
    for (let j = 0; j < highestScores.length; j++) {
      let scoresList = highestScores[j];
      if (playerScore > scoresList.score) {
        check = true;
      }
    }
    if (check) {
      console.log(messageStyle4("Yay! Great, You just beat one of the top scores \n"))
      console.log(messageStyle4("Send us a screenshot to include in the LeaderBoard \n"));
    } else {
      console.log(messageStyle4("Sorry, You didn't make it to the LeaderBoard, Better Luck Next Time..."));
    }
  }

  checkScore(playerScore);

} else {
  sendOffMsg();
}

function continueLevel2() {
  if (playerScore < 4) {
    console.log(messageStyle1("Sorry, You couldn't reach LEVEL 2 \n"));
  } else {
    console.log(messageStyle2("Congrats, You just reached LEVEL 2 \n"));
    if (readlineSync.keyInYN("Do you want to continue? ")) {
      play(questionairre2);
      continueLevel3();
    } else {
      sendOffMsg();
    }
  }
}

function continueLevel3() {
  if (playerScore < 9) {
    console.log(messageStyle1("Sorry, You couldn't reach LEVEL 3 \n"));
  } else {
    console.log(messageStyle2("Congrats, You just reached LEVEL 3 \n"));
    if (readlineSync.keyInYN("Do you want to continue? ")) {
      play(questionairre3);
    } else {
      sendOffMsg();
    }
  }
}

function emptyLine() { console.log(); }

function sendOffMsg() {
  emptyLine();
  console.log(chalk.yellowBright("You can always come back!"));
}