import React from 'react';
import Button from 'react-bootstrap/Button';

export default class AddTask extends React.Component {
  state = {
    task: '',
  };

  handleChange = event => {
    const task = event.target.value;
    this.setState({ task });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state;
    if (task.trim()) {
      this.props.taskAdd({ task });
    }
    this.setState({ task: '' });
  };

  render() {
    const { task } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={task} onChange={this.handleChange} placeholder="Add todo..."></input>
        <Button variant="secondary" type="submit">
          Add
        </Button>
      </form>
    );
  }
}
