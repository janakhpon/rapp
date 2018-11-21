import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.survey;
    state[e.target.name] = e.target.value;
    this.setState({survey:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, bdate, email, suggestion } = this.state.survey;

    axios.put('/api/survey/'+this.props.match.params.id, { username, bdate, email, suggestion })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT DATA
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.survey._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>survey list</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Name</label>
                <input type="text" class="form-control" name="username" value={this.state.survey.username} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Bdate</label>
                <input type="text" class="form-control" name="bdate" value={this.state.survey.bdate} onChange={this.onChange} placeholder="Bdate" />
              </div>
              <div class="form-group">
                <label for="author">Email</label>
                <input type="text" class="form-control" name="email" value={this.state.survey.email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="description">Suggestion</label>
                <input type="text" class="form-control" name="suggestion" value={this.state.survey.suggestion} onChange={this.onChange} placeholder="Suggestion" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
