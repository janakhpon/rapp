import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      surveys: []
    };
  }

  componentDidMount() {
    axios.get('/api/survey')
      .then(res => {
        this.setState({ surveys: res.data });
        console.log(this.state.surveys);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">
             SURVEY
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> ADD </Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Birth Date</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.surveys.map(survey =>
                  <tr>
                    <td><Link to={`/show/${survey._id}`}>{survey.username}</Link></td>
                    <td>{survey.bdate}</td>
                    <td>{survey.email}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
