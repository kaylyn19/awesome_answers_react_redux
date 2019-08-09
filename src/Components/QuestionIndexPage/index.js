import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import NewQuestionForm from '../NewQuestionForm';
import { Question } from '../../api';
import {getAllQuestions} from '../../store/action'

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    this.props.fetchQuestions()
    // Question.all().then(questions => {
    //   this.setState({
    //     questions: questions,
    //   });
    // });
  }

  deleteQuestion(id) {
    // this.setState is what we need to use if we ever want to change the state of
    // this componenet.
    this.setState({
      questions: this.state.questions.filter(q => q.id !== id),
    });
  }

  createQuestion(params) {
    this.setState({
      questions: [...this.state.questions, params]
    });
  }

  render() {
    const {questions} = this.props

    return(
      <main className='page'>
        <h2>Questions Index</h2>
        <ul>
          {questions.map((question) => {
            const { id, title } = question;
            return(
              <li 
                key={id}
                style={{listStyle: 'none'}}
              >
                <Link to={`/questions/${id}`}>
                  {title}
                </Link>
                <button onClick={() => {this.deleteQuestion(id)}}>
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
        <NewQuestionForm onCreateQuestion={(params) => {this.createQuestion(params)}}/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions
})

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(getAllQuestions())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexPage)