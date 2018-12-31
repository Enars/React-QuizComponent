import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      quiz_position: 1, 
      score: []
    }
  }
  handleResetClick() {
    this.setState((state) => {
      return {quiz_position: 1}
    })
  }
  updateCorrectAnswers(bool) {
    this.setState((prevState) => ({score: [...prevState.score, bool]}))
  }
  showNextQuestion() {
    this.setState((state) => {
      return {quiz_position: state.quiz_position + 1}
    })
  }
  render() {
    console.log(this.state.score)
    const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
    return (
      <div>
        {isQuizEnd ? 
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} state={this.state} /> 
        : 
          <QuizQuestion 
            quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} 
            showNextQuestionHandler={this.showNextQuestion.bind(this)} 
            updateCorrectAnswersHandler={this.updateCorrectAnswers.bind(this)}  
          />}
      </div>
    )
  }
}

export default Quiz