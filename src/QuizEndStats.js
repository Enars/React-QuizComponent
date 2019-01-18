import React, { Component } from 'react'

class QuizEndStats extends Component {
render() {
    return(
      <div style={statsStyle}>
        <p>1. Question text</p>
        <p style={answerStyle}>Alternative one</p>
      </div>
    )
  }
}

const statsStyle = {
  marginLeft: '1em',
  textAlign: 'left',
  borderTop: '1px solid black'
}

const answerStyle = {
  marginLeft: '1em',
  borderTop: '1px solid gray'
}


export default QuizEndStats