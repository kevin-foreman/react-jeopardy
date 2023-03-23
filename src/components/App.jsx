import React, { Component } from "react";
import axios from 'axios';
import { categories } from "../testdata.js";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: categories,
      userResponse: '',
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
    this.recordResponse = this.recordResponse.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
  }
  recordResponse(newText) {
    console.log("stuff");
    this.setState({ userResponse: newText });
  }
  submitResponse(events) {
    if (this.state.userResponse === this.state.currentQuestion.answer) {
      this.setState({score: (this.state.score += this.state.currentQuestion.value)})
    } else if (this.state.currentQuestion.answer) {
      this.setState({score: (this.state.score -= this.state.currentQuestion.value)})
    }
    events.target.value = '';
    this.setState(prevState => ({answeredQuestions: [...prevState.answeredQuestions, this.state.currentQuestion.id], currentQuestion: {}}), () => console.log('here!!!'))
  }
  selectQuestion(question) {
    if (this.state.currentQuestion.id !== question.id) this.setState({ currentQuestion: question });
    else this.setState({ currentQuestion: {}, currentAnswer: '' });
  }

  render () {
  return (
    <div id={"app"}>
      {/* What is Reactor 2? */}
      <Gameboard 
      categories={this.state.results}
      selectQuestion={this.selectQuestion}
      currentQuestion={this.state.currentQuestion}
      answeredQuestions={this.state.answeredQuestions}
      />

      <Scoreboard score={this.state.score} />
    
      <Response recordResponse={this.recordResponse} submitResponse={this.submitResponse} />
    </div>
  );
}
};
