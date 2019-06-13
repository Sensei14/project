import React from "react";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor) {
    const t = monitor.getDropResult();
    if (!monitor.didDrop()) {
      return;
    }
    return props.transfer(props.item, t.target, props.source);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

const Item = props => {
  const { connectDragSource } = props;

  return connectDragSource(
    <div className="item">
      <span>{props.item.text}</span>
    </div>
  );
};

export default DragSource("item", itemSource, collect)(Item);
