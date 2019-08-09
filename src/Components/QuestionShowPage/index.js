import React, {Component} from 'react';

import QuestionDetails from '../QuestionDetails';
import AnswerList from '../AnswerList';
// import {default as questionData} from './questionData';
// same thing as doing: import questionData from './questionData';
import {Question} from '../../api'
// To structure our application, we will create components
// that simulate the pages of web application. These are meant
// to replace the various pages rendered by the routes of our rails server.
export default class QuestionShowPage extends Component{
  constructor(props) {
    // when using constructor in a class-based component you must always call the Component class' constructor
    // with super props
    super(props);

    // console.log(`props: `, props)
    this.state = { // state is always an object just like props
      questionData: {},
    } //upon changing the state it will re-render 
  }

  selfDestruct() { // change the state in this method
    this.setState({
      questionData: null,
      red: false
    })
  }

  deleteAnswer(id) {
    this.setState({
      questionData: {
        ...this.state.questionData, // complete copy of questionData
        answers: this.state.questionData.answers.filter(a => a.id !== id)
        // answers will be a new array with the specific answer removed
      }
    })
  }

  componentDidMount() {
    Question.one(this.props.match.params.id).then(question => {
      console.log(question)
      this.setState({questionData: question})
    })
  }

  render() {
    if(!this.state.questionData) {
      return(
        <main className="page">
          <h2>Question does not exist!</h2>
        </main>
      )
    }
    return (
      <main style={this.state.red ? {color: 'red'} : {color: 'purple'}}>
        <QuestionDetails 
          title={this.state.questionData.title}
          body={this.state.questionData.body}
          viewCount={this.state.questionData.view_count}
          author={this.state.questionData.author}
        />
        <AnswerList answers={this.state.questionData.answers}
          onAnswerDeleteClick={(id) => {this.deleteAnswer(id)}}
        />
        <button onClick={() => {this.selfDestruct()}}>Self Destruct</button>
      </main>
    );  
  }
}