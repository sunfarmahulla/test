
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import CreateTodo from './components/Todo/create-todo.component';
import TodoList from './components/Todo/todo-list.component.js';
import EditTodo from './components/Todo/edit-todo.component';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';
class App extends Component {
  
  render() {
    const checkAuth =() =>{
        const token =localStorage.getItem('usertoken');
        if(!token){
          NotificationManager.error('Sorry you can not access this page please login! ', 'Error!');
          return false;
        }


        return true;
    }

    const AuthRoute = ({component: Component, ...rest})=> {
      return (
        <Route
          {...rest}
          render={(props) =>checkAuth() === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login'}} />
          
          }
        />
      )
    }
    
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <AuthRoute exact path="/todo" component={CreateTodo} />
            <AuthRoute exact path="/todo-list" component={TodoList} />
            <AuthRoute exact path="/edit-todo/:id" component={EditTodo} />
            <NotificationContainer/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App