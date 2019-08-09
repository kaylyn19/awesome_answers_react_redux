import React from 'react';
import {Question} from '../../api';
import FormError from '../FormError'

export default class NewQuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newQuestionData: {
        title: '',
        body: '',
        tag_names: '',
      },
      errors: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // computed property name
    const newData = {[event.target.name]: event.target.value}
    this.setState({
      newQuestionData: {
        ...this.state.newQuestionData, // merge the old object
        ...newData, // with the new object and over-write
        // newData is a constant and not a method in 'this' which is the new form
        // therefore, this.newData is not referring to anything
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    Question.create(this.state.newQuestionData).then(data => {
      if (!data.id) {
        // console.log(data)
        this.setState({
          errors: data.errors
        })
      } else {
        this.props.history.push(`/questions/${data.id}`)
      }
    })
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <FormError errors={this.state.errors} forField='title'/>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' value={this.state.newQuestionData.title} onChange={this.handleChange}/>
        </div>
        <div>
          <FormError errors={this.state.errors} forField='body'/>
          <label htmlFor='body'>Body</label>
          <input type='text' name='body' value={this.state.newQuestionData.body} onChange={this.handleChange}/>
        </div>
        <div>
          <FormError errors={this.state.errors} forField='tag_names'/>
          <label htmlFor='tag_names'>Tag Names</label>
          <textarea type='text' name='tag_names' value={this.state.newQuestionData.tag_names} onChange={this.handleChange}/>
        </div>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}