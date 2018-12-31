import React, { Component } from 'react'
const star = require("./icons/star.png")
const emptyStar = require("./icons/emptyStar.png")

class QuizScore extends Component {
  getScore() {
    return this.props.state.score.filter(val => val).length
  }
  render() {
    return(
      <span>
        {this.props.state.score.map((a, index) => (
           (a) ?
            <img style={resize} key={index}src={star} alt="star"/>
           :
            <img style={resize} key={index}src={emptyStar} alt="empty star"/>
        ))
        }
        {console.log(this.props.state.score.length)}
        {console.log(this.getScore())}
      <p>You got {Math.round(((this.getScore() * 100) / this.props.state.score.length))}% right!</p>
      </span>
    )
  }
}

const resize = {
  width: '50px',
  height: 'auto'
}

export default QuizScore