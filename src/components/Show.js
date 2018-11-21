import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      survey: {}
    };
  }

  componentDidMount() {
    axios.get('/api/survey/'+this.props.match.params.id)
      .then(res => {
        this.setState({ survey: res.data });
        console.log(this.state.survey);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/survey/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.survey.username}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Survey List</Link></h4>
            <dl>
              <dt>Birth Date</dt>
              <dd>{this.state.survey.bdate}</dd>
              <dt>Email</dt>
              <dd>{this.state.survey.email}</dd>
              <dt>Suggestion</dt>
              <dd>{this.state.survey.suggestion}</dd>
            </dl>
            <Link to={`/edit/${this.state.survey._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.survey._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
