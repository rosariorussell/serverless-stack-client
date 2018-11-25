import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      tasks: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const tasks = await this.tasks();
      this.setState({ tasks });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  tasks() {
    return API.get("tasks", "/tasks");
  }

  renderTasksList(tasks) {
    return [{}].concat(tasks).map(
      (task, i) =>
        i !== 0
          ? <ListGroupItem
            key={task.taskId}
            href={`/tasks/${task.taskId}`}
            onClick={this.handleTaskClick}
            header={task.content.trim().split("\n")[0]}
          >
            {"Created: " + new Date(task.createdAt).toLocaleString()}
          </ListGroupItem>
          : <ListGroupItem
            key="new"
            href="/tasks/new"
            onClick={this.handleTaskClick}
          >
            <h4>
              <b>{"\uFF0B"}</b> Create a new task
              </h4>
          </ListGroupItem>
    );
  }

  handleTaskClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }


  renderLander() {
    return (
      <div className="lander">
        <h1>Serverless React Tasks</h1>
        <p>A simple task app built using React on AWS Serverless</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }

  renderTasks() {
    return (
      <div className="tasks">
        <PageHeader>Your Tasks</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderTasksList(this.state.tasks)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderTasks() : this.renderLander()}
      </div>
    );
  }
}