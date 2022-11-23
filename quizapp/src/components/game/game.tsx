import React, { FC } from 'react';
import ReactDOM from "react-dom";
import styles from './game.module.css';
import questions from './questions.json';
import useRef from 'react';
interface GameProps {}


 class Game extends React.Component
{
  

  private currentQuestion ;
  private acceptingAnswers : boolean = false;
  private score = 0;
  private  questionCounter = 0;
  private  availableQuesions = [];
  private CORRECT_BONUS = 10;
  private MAX_QUESTIONS = 3;
  private question = React.createRef<HTMLHeadElement>();
  private choices = Array.from(document.getElementsByClassName('choice-text'));
  private progressText =React.createRef<HTMLDivElement>();
 
  private scoreText =  React.createRef<HTMLDivElement>();
  private progressBarFull = React.createRef<HTMLDivElement>();
  private loader = React.createRef<HTMLDivElement>();
  private game = React.createRef<HTMLDivElement>();
  
  constructor(props) {  
    super(props); 
     
    this.state = {  
      count: 0 ,
      questionsData:questions 
    };  
  }  



  componentDidMount() {
   
   console.log(questions);
  
  this.startGame();
  }

  componentWillUnmount()
   {

 
    this.choices.forEach((choice) => {
      choice.addEventListener('click', (event: Event) => {
        if (!this.acceptingAnswers) return;
    
        const { target } = event
    
        this.acceptingAnswers = false;
        const selectedChoice = event.target as HTMLButtonElement;
        const selectedAnswer = selectedChoice.dataset['number'];
    
        const classToApply = selectedAnswer == this.currentQuestion.answer ? 'correct' : 'incorrect';
    
        if (classToApply === 'correct') {
          this.incrementScore(this.CORRECT_BONUS);
        }
    
        selectedChoice.parentElement.classList.add(classToApply);
    
        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply);
         this.getNewQuestion();
        }, 1000);
      });
    });
  }

  handleClick() {
    console.log('Click happened');
  }


  //CONSTANTS
 startGame () 
  {
  this.questionCounter = 0;
  this.score = 0;
  
  this.availableQuesions = [ ...questions ];
  this.getNewQuestion();
  this.game.current.classList.remove('hidden');
  this.loader.current.classList.add('hidden');
  };

  getNewQuestion ()
{
	if (this.availableQuesions.length === 0 || this.questionCounter >= this.MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', this.score.toString());
		//go to the end page
		return window.location.assign('/end.html');
	}
	this.questionCounter++;
  console.log(document.getElementById('progressText'));
	this.progressText.current.innerHTML = `Question ${this.questionCounter}/${this.MAX_QUESTIONS}`;
	//Update the progress bar
	this.progressBarFull.current.style.width = `${this.questionCounter / this.MAX_QUESTIONS * 100}%`;

	const questionIndex = Math.floor(Math.random() * this.availableQuesions.length);
	this.currentQuestion = this.availableQuesions[questionIndex];
	this.question.current.innerText =this.currentQuestion.question;

	this.choices.forEach((choice)  => {

    const choiceElement= choice as HTMLButtonElement;
		const number = choiceElement.dataset['number'];
		choiceElement.innerText = this.currentQuestion['choice' + number];
	});

	this.availableQuesions.splice(questionIndex, 1);
	this.acceptingAnswers = true;
};



  incrementScore (num)
{
this.score += num;
	this.scoreText.current.innerText = this.score.toString();
};




render() 
  {
    return (
    
    <div className='container'>
   <div className='loader' ref={this.loader}></div>
   <div id="game" className="justify-center flex-column hidden" ref={this.game}>
     <div id="hud">
       <div id="hud-item">
         <div id="progressText" className="hud-prefix" ref={this.progressText}>
           Question
         </div>
         <div id="progressBar" >
           <div id="progressBarFull" ref={this.progressBarFull}></div>
         </div>
       </div>
       <div id="hud-item">
         <p className="hud-prefix">
           Score
         </p>
         <h1 className="hud-main-text" id="score">
           0
         </h1>
       </div>
     </div>
     <h2 id="question" ref={this.question}></h2>
     <div className="choice-container">
       <p className="choice-prefix">A</p>
       <p className="choice-text" data-number="1"></p>
     </div>
     <div className="choice-container">
       <p className="choice-prefix">B</p>
       <p className="choice-text" data-number="2"></p>
     </div>
     <div className="choice-container">
       <p className="choice-prefix">C</p>
       <p className="choice-text" data-number="3"></p>
     </div>
     <div className="choice-container">
       <p className="choice-prefix">D</p>
       <p className="choice-text" data-number="4"></p>
     </div>
   </div>
 </div>);
  }

}




export default Game;
