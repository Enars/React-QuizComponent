import React, { Component } from 'react'
const star = require("./icons/star.png")
const halfStar = require("./icons/halfStar.png")
const emptyStar = require("./icons/emptyStar.png")

class QuizScore extends Component {
  getScore() {
    return this.props.state.score.filter(val => val).length
  }
  getScorePercentage() {
    return Math.round(((this.getScore() * 100) / this.props.state.score.length))
  }
  getStarsArray() {
    let scorePer = this.getScorePercentage()
    let stars = []
    for (let i = 0; i < 100; i += 20) {
      switch (true) {
        case (i + 5 < scorePer && i + 15 > scorePer):
          stars.push(halfStar)
          break        
        case (i >= scorePer):
          stars.push(emptyStar)
          break
        default:
          stars.push(star)
          break
      }      
    }
    return stars
  }
  render() {
    return(
      <span className="score">
        {this.getStarsArray().map((val, index) => (<img style={resize} key={index} src={val} alt="star"/>))}
        <br/>
        <p>You got {this.getScorePercentage()}% right!</p>
      </span>
    )
  }
}

const resize = {
  width: '50px',
  height: 'auto'
}

export default QuizScore