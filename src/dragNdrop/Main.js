import React, { Component } from "react";
import List from "./List";
import List2 from "./List2";
import Important from "./Important";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import "./dnd.css";

class Main extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "item 1",
        important: false
      },
      {
        id: 2,
        text: "item 2",
        important: false
      },
      {
        id: 3,
        text: "item 3",
        important: false
      },
      {
        id: 4,
        text: "item 4",
        important: true
      }
    ],
    list: [
      {
        id: 5,
        text: "item 5",
        important: false
      }
    ]
  };

  transfer = (item, target, source) => {
    const id = item.id;

    switch (target) {
      case "list": {
        switch (source) {
          case "important": {
            const index = this.state.tasks.findIndex(task => task.id === id);
            let tasks = [...this.state.tasks];
            tasks[index].important = false;
            this.setState({
              tasks
            });
            break;
          }
          case "list2": {
            let item = this.state.list.find(task => task.id === id);
            let tasks = [...this.state.tasks];
            item.important = false;
            tasks.push(item);
            const list = this.state.list.filter(task => task.id !== id);
            this.setState({
              list,
              tasks
            });
            break;
          }
        }
        break;
      }
      case "important": {
        switch (source) {
          case "list": {
            const index = this.state.tasks.findIndex(task => task.id === id);
            let tasks = [...this.state.tasks];
            tasks[index].important = true;
            this.setState({
              tasks
            });

            break;
          }
          case "list2": {
            let item = this.state.list.find(task => task.id === id);
            item.important = true;
            let tasks = [...this.state.tasks];
            tasks.push(item);
            const list = this.state.list.filter(task => task.id !== id);
            this.setState({
              list,
              tasks
            });

            break;
          }
        }
        break;
      }
      case "list2": {
        switch (source) {
          case "list": {
            let item = this.state.tasks.find(task => task.id === id);
            item.important = false;
            let list = [...this.state.list];
            list.push(item);
            const tasks = this.state.tasks.filter(task => task.id !== id);
            this.setState({
              tasks,
              list
            });

            break;
          }
          case "important": {
            let item = this.state.tasks.find(task => task.id === id);
            item.important = false;
            let list = [...this.state.list];
            list.push(item);
            const tasks = this.state.tasks.filter(task => task.id !== id);
            this.setState({
              tasks,
              list
            });
          }
        }

        break;
      }
    }
  };

  render() {
    const important = this.state.tasks.filter(task => task.important === true);
    const tasks = this.state.tasks.filter(task => task.important === false);
    const list = [...this.state.list];

    return (
      <div>
        <List
          tasks={tasks}
          transfer={this.transfer}
          target={this.transfer.target}
        />
        <Important
          tasks={important}
          transfer={this.transfer}
          target={this.transfer.target}
        />
        <List2
          tasks={list}
          transfer={this.transfer}
          target={this.transfer.target}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Main);
