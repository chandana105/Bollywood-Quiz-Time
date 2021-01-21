let readlineSync = require('readline-sync');
const chalk = require('chalk');
const boxen = require('boxen');
const log = console.log;

let greeting = chalk.black.bgAnsi256(194).bold(`Welcome to Chandana's quiz on ${chalk.underline.italic('BOLLYWOOD MOVIES')} !`);

// chalk.yellowBright.bold()


const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "classic",
 borderColor: "green",
 backgroundColor: "#fff"
};

const boxenOption = {
//  padding: 1,
 margin: 1,
 borderStyle: "classic",
 borderColor: "white",
 backgroundColor: "cyan"
};

const msgBox = boxen( greeting, boxenOptions );

log(msgBox);


let levelOneDesc = chalk.black.bgAnsi256(194).bold((`LEVEL ONE ${chalk.underline.italic('Complete the names of following movies')} !`));

const msgBox1 = boxen( levelOneDesc, boxenOption );




let levelTwoDesc = chalk.black.bgAnsi256(194).bold((`LEVEL TWO ${chalk.underline.italic('Guess the name of bollywood movie based on given dialogues !')}`));

const msgBox2 = boxen( levelTwoDesc, boxenOption );


let levelThreeDesc = chalk.black.bgAnsi256(194).bold((`LEVEL THREE ${chalk.underline.italic('Guess the names of bollywood movie based on song titles , also guess the names of Lead Actors based on given bollywood movie!')}`));

const msgBox3 = boxen( levelThreeDesc, boxenOption );

let gameEnding = chalk.black.bgAnsi256(194).bold(`GAME OVER!! THANKS FOR PLAYING! :)`);

const msgBox4 = boxen( gameEnding, boxenOptions );


let score = 0;
let level1Score = 0;
let level2Score = 0;
let level3Score = 0;

let topScore ;
let sortedArrayBasedOnScores;
let name;

var highScores = [
{
  personName :'Sanjana',
  personScore: 35
},
{
  personName : 'LM',
  personScore: 39
},]


function sortedArray(){
      sortedArrayBasedOnScores =  highScores.sort((a, b) => b.personScore - a.personScore )
    // log(sortedArrayBasedOnScores)
    for (i = 0; i < sortedArrayBasedOnScores.length ; i ++) {
    console.log(sortedArrayBasedOnScores[i].personName, sortedArrayBasedOnScores[i].personScore)
}
}

// isCurrentScoreGreater(sortedArrayBasedOnScores);

//  function isCurrentScoreGreater(arr) {
//         loop: { // label
//             for(var i=0; i<arr.length; i++) {
//                 if (arr[i].personScore < score) {
//                     // console.log("Found: "+arr[i]);
//               // log(arr[i])

//                       highScores.push({personName : 'hi', personScore : score})
//                       // log(highScores)
//                       sortedArray();
//                     break loop;
//                 }
//             }
//             // console.log("No even number found.");
//         }
//         // console.log("DONE");
//     }

function highScoresRecord(){
    console.log(chalk.cyanBright.bold('High Scores of other players are :- '))
    sortedArray();
 topScore = sortedArrayBasedOnScores[0].personScore;
 
// console.log(topScore)
checkHighScore(score, name);
}

function checkHighScore(currentScore, currentName) {
    
if (currentScore >= topScore) {
  log('\n');
  console.log(chalk.yellowBright.bold('Congratulations!! Pls send your screenshot as you had beaten up the Top score'))
}else{
    log(chalk.redBright(`Sorry! You  haven't beaten up the Top Score.`))
    log(chalk.cyanBright('It was nice playing with you! SEE YOU NEXT TIME :)'))
}
  // highScores.push({personName : currentName, personScore : score})
  // log(chalk.greenBright('---***---***---***---'));

  // log(chalk.cyanBright.bold('Current Top Score Record is:-'));

  // sortedArray();
// } else {
// isCurrentScoreGreater(sortedArrayBasedOnScores);

// }

}



if (readlineSync.keyInYN('Do you want to play this quiz?')) {
  // 'Y' key was pressed.
  name = readlineSync.question(chalk.yellow.bold('May i have your name please!'))
log(chalk.yellowBright.bold.italic('Welcome ' + name.toUpperCase() + '!! Lets play the quiz now!!' ));
 let heading= setInterval(() => {
// let heading;
  // else {
     log(chalk.cyanBright(`${chalk.red('**')}SO, THERE ARE THREE LEVELS :-} If you score 4, you go to ${chalk.green('--->')} LEVEL 2,then you score atleast 9 or greater you go to ${chalk.green('--->')} LEVEL 3!!${chalk.red('**')}\n At the end, If you had beaten up the high score, you will be asked to send the screenshot of your score!!`));

      let levelOneComing = setInterval(() => {
      log(chalk.greenBright
('So here comes the LEVEL -I'));
   
      if (levelOneComing) clearInterval(levelOneComing)    
     },1000)

     let levelOneHeading = setInterval(() => {
      log(msgBox1);  

log(chalk.blueBright.bold('a. For each correct answer,you will be rewarded by 1 Point. '))
log(chalk.blueBright.bold('b. For each wrong answer,your no point will be deducted. '))
      for(i =0; i< questions.length ; i++) {
      var ques = questions[i];
      play(ques.question, ques.choices, ques.answer)
}
 level1Score = score;
//  log(level1Score);

if (level1Score >= 4 || level1Score === 5) {
  console.log(`${name.toUpperCase()}, YOUR LEVEL I SCORE ${chalk.greenBright(level1Score)}`)
     log(chalk.cyanBright('NOW YOU HAVE REACHED LEVEL 2'));
     if (readlineSync.keyInYN('Do you want to continue the quiz?')) {
       log(msgBox2)
       log(chalk.blueBright.bold('a. For each correct answer,you will be rewarded by 2 Points. '))
log(chalk.blueBright.bold('b. For each wrong answer,your 1 point will be deducted from your current score value. '))
        for(i =0; i< questionsPartTwo.length ; i++) {
      var ques = questionsPartTwo[i];
      playLevelTwo(ques.question, ques.choices, ques.answer)
     }}
     else {
         log(chalk.cyanBright('Thanks for coming!Just catch the fun next time!'));
     }
  } else{
    console.log(`${name.toUpperCase()}, YOUR FINAL SCORE:- ${chalk.greenBright(score)}`)
    log(chalk.redBright(`Oops! You didn't reached next Level.`))
    log(chalk.yellowBright('It was nice playing with you! SEE YOU NEXT TIME'))
  }

level2Score = score;
// log(level2Score)
// 9 >= score > 4
  if (level2Score >= 9 || level2Score === 15) {
  console.log(`${name.toUpperCase()}, YOUR LEVEL II Score ${chalk.greenBright(level2Score)}`)
     log(chalk.cyanBright('NOW YOU HAVE REACHED LEVEL 3 - THE FINAL ROUND'));
     if (readlineSync.keyInYN('Do you want to continue the quiz?')) {
       log(msgBox3)
        log(chalk.blueBright.bold('a. For each correct answer,you will be rewarded by 3 Points. '))
log(chalk.blueBright.bold('b. For each wrong answer,your 1 point will be deducted from your current Score value. '))
        for(i = 0; i < questionsPartThree.length ; i++) {
      var ques = questionsPartThree[i];
      playLevelThree(ques.question, ques.choices, ques.answer)
     }
     log(msgBox4);
     log('\n')
     console.log(chalk.yellowBright.bold.underline(`${name.toUpperCase()}, YOUR FINAL SCORE:- ${chalk.greenBright(score)}`))
    log('\n')
    log(chalk.greenBright('---***---***---***---'));
    log(chalk.greenBright('---***---***---***---'));
    log('\n')

    // HIGH SCOR
      highScoresRecord()
     }
     else {
         log(chalk.cyanBright('Thanks for coming! Just catch the fun next time!'));
     }
  } else if (level1Score < 4)  {
    console.log(':)')
  } 
  else   {
    console.log(`${name.toUpperCase()}, YOUR FINAL SCORE:- ${chalk.greenBright(score)}`)
     log(chalk.redBright(`Oops! You didn't reached next Level.`))
    log(chalk.yellowBright('It was nice playing with you! SEE YOU NEXT TIME'))
  }

      if (levelOneHeading) clearInterval(levelOneHeading)    
     },2000)
 
  if (heading) clearInterval(heading) 

  },1000)

} else {
  // Another key was pressed.
  log(chalk.cyanBright('Thanks for coming!Just catch the fun next time!'));
  // Do something...
}



 function play(question,choices, answer) {
   var userAns = readlineSync.keyInSelect(choices, question, );
   if (userAns === answer) {
    correctPart(question,choices, answer)
    levelOneScoreCal();
  } 
  else {
    wrongPart(question,choices, answer)
  }
scorePart();
}

 function playLevelTwo(question,choices, answer) {
   var userAns = readlineSync.keyInSelect(choices, question, );
   if (userAns === answer) {
    correctPart(question,choices, answer)
    levelTwoScoreCal();
  } 
  else {
    wrongPart(question,choices, answer)
    levelTwoScoreDeduct()
  }
scorePart();
}



 function playLevelThree(question,choices, answer) {
   var userAns = readlineSync.keyInSelect(choices, question, );
   if (userAns === answer) {
    correctPart(question,choices, answer)
    levelThreeScoreCal();
  } 
  else {
    wrongPart(question,choices, answer)
    levelTwoScoreDeduct()
  }
scorePart();
}



function correctPart(question,choices, answer) {
   log(chalk.cyanBright('YOU ARE RIGHT !! :)'))
      log(chalk.cyanBright('Its ' + question +  choices[answer]))
}
function wrongPart(question,choices, answer) {
    log(chalk.redBright('YOU ARE WRONG !! :('))
      log(chalk.redBright('Its ' + question +  choices[answer]))
}
function scorePart() {
  log(chalk.yellowBright('Your Score' , score))
  log('\n');
  log(chalk.greenBright('---***---***---***---'))
}

function levelOneScoreCal() {
  score++;
}

function levelTwoScoreCal() {
  score+=2;
}

function levelThreeScoreCal() {
  score+=3;
}
function levelTwoScoreDeduct() {
  score-=1;
}




var questions = [{
  question :'Kapoor ',
  choices :  ['the Kareena', '& Brothers', '& Sons', '& Kapoor'],
  answer : 2
},
 {
  question :'Nil Battey ',
  choices :  ['Chor', 'Sannata', 'Pathr', 'Nil'],
  answer :  1
},{
  question :'A ',
  choices :  ['Common Man', 'Hitler', 'Wednesday', 'Hint'],
  answer :  2
},{
  question :'Lage Raho ',
  choices :  ['Munna Bhai', 'Chunna bhai', 'bhai', 'bhaiji'],
  answer :  0
},{
  question :'No One ',
  choices :  ['Can do this', 'Can Fight', 'Saved Her', 'Killed Jesica'],
  answer :  3
}
]

var questionsPartTwo = [{
  question :'“Mere paas maa hai.”',
  choices :  ['Janjir', 'Anand', 'Deewar'],
  answer : 2
},
 {
  question :'“Babumoshai, zindagi badi honi chahiye, lambi nahi.”',
  choices :  ['Aradhana', 'Anand', 'Bawarchi'],
  answer :  1
},{
  question :'“Hum jahan khade hote hain line vahi se shuru hoti hai.”',
  choices :  [' Kaalia', 'Mr. India', 'Maine Pyaar Kiya'],
  answer :  0
},{
  question :'“Tareekh pe tareekh, tareekh pe tareekh, tareekh pe tareekh milti gayi My Lord, par insaaf nahi mila!”',
  choices :  ['Ghayal', 'Damini ', 'Gadar- Ek prem katha'],
  answer :  1
},{
  question :'“Sara shehar mujhe lion ke naam se jaanta hai.”',
  choices :  ['Mr. India', 'Yudh', 'Kalicharan'],
  answer :  2
}
]

var questionsPartThree = [{
  question :'‘Aaj Phir Jeene Ki Tamanna Hai’ ',
  choices :  ['Hare Rama Hare Karishna', 'Guide', 'Awaara'],
  answer : 1
},
 {
  question :'“Honton Mein Aisi Baat Main”',
  choices :  ['Namak Halal ', ' Jewel Thief ', ' Caravan '],
  answer :  1
},{
  question :'"Yaara O Yaara Milna Hamara”',
  choices :  ['Jeet', 'Devdas', 'Raja'],
  answer :  0
},{
  question :'Chote Chote Bhaiyon Ke ',
  choices :  ['Jodi Kya Banayi Wah Wah Ramji', 'Hum Aapke Hain Koun', 'Hum Saath-Saath Hain'],
  answer :  2
},{
  question :'‘Aap Jaisa Koi’',
  choices :  ['Qurbani', 'Kabhi Kabhi', 'Hare Rama Hare Karishna'],
  answer :  0
},
{
  question :'“Dheere Dheere Se Meri Zindagi Mein Aana”',
  choices :  ['Sadak', ' Khiladi ', 'Aashiqui'],
  answer :  2
},{
  question :'“Bahut Pyaar Karte Hai”',
  choices :  ['Saajan ', 'Darr', 'Dilwale'],
  answer :  0
},{
  question :'Guess the names of Lead Actors in given movie names in upcoming last 3 questions: ‘Main Prem ki Deewani Hoon’',
  choices :  [' Abhishek Bachchan, Hrithik Roshan and Karishma Kapoor', ' ShahRukh Khan, Hrithik Roshan and Kareena Kapoor', ' Abhishek Bachchan, Hrithik Roshan and Kareena Kapoor'],
  answer :  2
},{
  question :'‘Aitraaz’',
  choices :  ['Akshay Khanna, Karishma Kapoor and Priyanka Chopra', 'Akshay Kumar, Kareena Kapoor and Priyanka Chopra', 'ShahRukh Khan, Kareena Kapoor and Priyanka Chopra'],
  answer :  1
},{
  question :'‘Fanaa’',
  choices :  ['Aamir Khan and Kajol,', 'Salman Khan and Kajol,', 'Aamir Khan and Kareena Kapoor,'],
  answer :  0
}
]





// ur rt , itid fyll name , so ifscore 5 toh douwnttoconti yethen lebel2 else if no hk fxn call , level2 score 2, 5 seconds to each ques, rules for each level

// let levelTwoDesc = chalk.black.bgAnsi256(194).bold(`LEVEL TWO ${chalk.underline.italic('10 CORRECT')} !`);

// const msgBox2 = boxen( levelTwoDesc, boxenOptions );

// for(var i = 0; i < questions.length; i++) {
//   var ques = questions[i]
//    const prompt = new Quiz({
//   name : ques.name,
//   message : ques.message,
//   choices : ques.choices,
//   correctChoice : ques.correctChoice
// })
// prompt
//   .run()
//   .then(answer => {
//     if (answer.correct) {
//       console.log('Correct!');
//       score++;
//       console.log('Your Score : ' + score)
//     } else {
//       console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
//     }
//   })
//   .catch(console.error);
// }
