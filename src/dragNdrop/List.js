import React, { Component } from "react";
import Item from "./Item";
import { DropTarget } from "react-dnd";

const target = {
  drop() {
    const dropResult = {
      target: "list"
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

class List extends Component {
  state = {};

  render() {
    const tasks = this.props.tasks.map(item => (
      <Item
        key={item.id}
        item={item}
        transfer={this.props.transfer}
        source="list"
      />
    ));

    const { connectDropTarget } = this.props;

    return connectDropTarget(<div className="lista">{tasks}</div>);
  }
}

export default DropTarget("item", target, collect)(List);
