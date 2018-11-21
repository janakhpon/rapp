import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      bdate: '',
      email: '',
      suggestion: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, bdate, email, suggestion } = this.state;

    axios.post('/api/survey', { username, bdate, email, suggestion })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { username, bdate, email, suggestion } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Answer survey
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Survey List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name"> Name </label>
                <input type="text" class="form-control" name="username" value={username} onChange={this.onChange} placeholder="Name" required/>
              </div>
              <div class="form-group">
                <label for="title">Birth Date</label>
                <input type="date" class="form-control" name="bdate" value={bdate} onChange={this.onChange} placeholder="Birth Date"  required />
              </div>
              <div class="form-group">
                <label for="author">Email</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" required />
              </div>
              <div class="form-group">
                <label for="description">Suggestion</label>
                <textArea class="form-control" name="suggestion" onChange={this.onChange} placeholder="Suggestion" cols="80" rows="3" required>{suggestion}</textArea>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
