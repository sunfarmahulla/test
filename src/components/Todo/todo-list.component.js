import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
//import TodoTableRow from './TodoTableRow';
//import LoadingSpinner from '../../LoadingSpinner';
//import { NotificationManager } from 'react-notifications';

export default class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      persons: []
    };
  }

  // componentDidMount() {
  //   axios.get('todo')
  //     .then(res => {
  //       this.setState({
  //         todo: res.data,
  //         loading: false

  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       NotificationManager.error('Error while fetching data', 'Fail');
  //     })
  // }
  componentDidMount() {
    axios.get(`todo/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  } 

  // DataTable() {
  //   return this.state.todo.map((res, i) => {
  //     return <TodoTableRow obj={res} key={i} />;
  //   });
  // }


  render() {
    ///const loading = this.state.loading;
    return (<section>
      <section className="alert alert-success">
        <center><h3>Todo Tasks List</h3></center>
      </section>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Discription</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* {loading ? <LoadingSpinner /> :
          <tbody>
            {this.DataTable()}
          </tbody>
            } */}

{ this.state.persons.map(person => 
          <tr className="table-primary">
            <td>{person.name}</td>
            <td>{person.discription}</td>
            
            <td>
            <Link className="edit-link" to={"/edit-todo/" + person.id}>
                        <i className="fa fa-edit"></i>
                    </Link>
               <form onSubmit={this.handleSubmit}>
                  <button type="submit" value={person.id} onClick={e => this.onClick(e)}>Delete</button>
              </form>
              
            </td>
            </tr>
          )}

      </table>

    </section>);
  }
}