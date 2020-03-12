import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: white;
`;

class Tasks extends React.Component {
  render() {
    //   console.log("PROPS IN DRAGGABLE", this.props);
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => {
           
          return (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
              {this.props.task.content}
            </Container>
          );
        }}
      </Draggable>
    );
  }
}

export default Tasks;
