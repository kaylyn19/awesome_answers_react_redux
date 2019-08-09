import React, {Component} from 'react';
import QuestionShowPage from '../QuestionShowPage'
import QuestionIndexPage from '../QuestionIndexPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom' //react component
import WelcomePage from '../WelcomePage'
import Clock from '../Clock';
import {User} from '../../api'
import NavBar from '../NavBar'
import SignInPage from '../SignInPage'
import SignUpPage from '../SignUpPage'
import AuthRoute from '../AuthRoute'
import NewQuestionForm from '../NewQuestionForm';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../../store/reducers';
import thunk from 'redux-thunk'
// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`


export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.getCurrentUser = this.getCurrentUser.bind(this)
  }

 getCurrentUser() {
    User.current().then(user => {
      if (user.id) {
        this.setState({currentUser: user})
      }
      // } else {
      //   console.log('no session');
      //   // window.location = '/sign_in'
      // }
    })
  }
  componentDidMount() {
    this.getCurrentUser()
  }

  render() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Clock/>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={WelcomePage}/>
              <Route exact path="/sign_in" component={SignInPage}/>
              <Route path='/sign_up' render={(routeProps) => <SignUpPage 
              onSignUp={this.getCurrentUser} {...routeProps}/>}/>
              <AuthRoute path='/questions/new' isAuthenticated={this.state.currentUser} component={NewQuestionForm}/>
              <Route exact path="/questions/:id" component={QuestionShowPage} />
              <Route exact path="/questions" component={QuestionIndexPage} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );  
  }
}