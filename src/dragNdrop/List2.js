import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Item from "./Item";

const target = {
  drop() {
    const dropResult = {
      target: "list2"
    };
    return dropResult;
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
};

class List2 extends Component {
  state = {};

  render() {
    console.log(this.props.tasks);
    const tasks = this.props.tasks.map(item => (
      <Item
        key={item.id}
        item={item}
        transfer={this.props.transfer}
        source="list2"
      />
    ));

    const { connectDropTarget, hovered } = this.props;

    const backgroundColor = hovered ? "green" : "white";

    return connectDropTarget(
      <div className="lista" style={{ backgroundColor }}>
        {tasks}
      </div>
    );
  }
}

export default DropTarget("item", target, collect)(List2);
