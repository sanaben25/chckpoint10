import React from "react";


import './App.css';


class Jobs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: ["task1", "task2", "task3"],
    };
  }
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
addTask = () => {
    // not allowed AND not working
    this.setState(state => {
      const list = state.list.concat(state.value);
      return {
        list,
        value: '',
      };
    });
  };
render()
{
  return(
    <React.Fragment>

      <div className="container">
        <div className="new_Tasks">
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.addTask}
          
        >Add</button>
        </div>
        <div className="list_tasks">
          <h3>List of tasks</h3>
          <div>
          <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
          </div>
        </div>
        
      </div>

    </React.Fragment>

  );

}
}

export default Jobs;
