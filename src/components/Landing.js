import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <div className="jumptron mt-5 alert alert-success">
           <center><h3>Welcome To Todo manager <i className="fa fa-tasks"></i></h3></center> 
           <p style={{color: 'red'}}><b>NOTE:</b> Todo, Todo Manager is protected so after login you can access it.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
