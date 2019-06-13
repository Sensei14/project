import React, { Component } from "react";
import Item from "./Item";
import { DropTarget } from "react-dnd";

const target = {
  drop() {
    const dropResult = {
      target: "important"
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

class Important extends Component {
  state = {};
  render() {
    const importantTasks = this.props.tasks.map(item => (
      <Item
        key={item.id}
        item={item}
        transfer={this.props.transfer}
        source="important"
      />
    ));

    const { connectDropTarget } = this.props;

    return connectDropTarget(<div className="lista2">{importantTasks}</div>);
  }
}

export default DropTarget("item", target, collect)(Important);
