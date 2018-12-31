import React, { Component } from 'react'
import QuizScore from './QuizScore.js'

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetClickHandler()
  }
  render() {
    return(
      <div className="content">
        <QuizScore state={this.props.state}/>
        <br />
        <p>Thanks for playing!</p>
        <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
      </div>
    )
  }
}

export default QuizEnd