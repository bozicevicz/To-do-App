import React from 'react';
import AddTask from './AddTask';
import TaskItem from './TaskItem';
import ShowTasks from './ShowTasks';

export default class TaskList extends React.Component {
  state = { tasks: [], tasksShow: [] };

  addNewTask = ({ task }) => {
    const newTask = {
      id: `${new Date().getTime()}`,
      task,
      completed: false,
    };
    this.setState({ tasks: [...this.state.tasks, newTask], tasksShow: [...this.state.tasksShow, newTask] });
  };

  taskDelete = item => {
    let tasksToGo = [...this.state.tasks];
    let value = item.id;
    tasksToGo = tasksToGo.filter(item => item.id !== value);
    this.setState({ tasks: tasksToGo, tasksShow: tasksToGo });
  };

  taskComplete = item => {
    let tasksToGo = [...this.state.tasks];
    item.completed ? (item.completed = false) : (item.completed = true);
    this.setState({ tasks: tasksToGo, tasksShow: tasksToGo });
  };

  filterTasks = ({ value }) => {
    let tasksToGo = [...this.state.tasks];
    if (value === '2') {
      tasksToGo = tasksToGo.filter(item => item.completed === false);
    } else if (value === '3') {
      tasksToGo = tasksToGo.filter(item => item.completed === true);
    }
    this.setState({ tasksShow: tasksToGo });
  };

  render() {
    const { tasksShow } = this.state;

    return (
      <div className="TasksDiv">
        <h1>To-do-App</h1>
        <AddTask taskAdd={this.addNewTask} />
        <ShowTasks handleToggle={this.filterTasks} />
        <ul>
          {tasksShow.map(item => (
            <li>
              <TaskItem
                key={item.id}
                label={item.id}
                text={item.task}
                complete={item.completed}
                deleteTask={() => this.taskDelete(item)}
                completeTask={() => this.taskComplete(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
