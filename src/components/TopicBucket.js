import React from "react";
import styled from "styled-components";
import TopicCard from "./TopicCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import ActionButton from "./ActionButton";

const Container = styled.div`
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Title = styled.h4`
  color: gray;
  font-size: 1.6rem;
`;
const CardList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;

const TopicBucket = (props) => {
  return (
    <>
      <Draggable draggableId={String(props.topic.id)} index={props.index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <Droppable droppableId={String(props.topic.id)} type='card'>
              {(provided) => (
                <CardList ref={provided.innerRef} {...provided.droppableProps}>
                  <Title>{props.topic.title}</Title>
                  {props.cards.map((card, index) => (
                    <TopicCard
                      key={card.id}
                      card={card}
                      index={index}
                      id={card.id}
                    />
                  ))}
                  {provided.placeholder}
                </CardList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
      <ActionButton topicId={props.topicId} />
    </>
  );
};

export default TopicBucket;
