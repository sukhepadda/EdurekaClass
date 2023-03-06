import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

function SimpleList() {
  return (
    <Container className="mt-2">
    <h2 className="mb-4">Simple List</h2>
      <ListGroup>
        <ListGroup.Item variant="primary">Primary List</ListGroup.Item>
        <ListGroup.Item variant="secondary">Secondary List</ListGroup.Item>
        <ListGroup.Item variant="success">Success List</ListGroup.Item>
        <ListGroup.Item variant="danger">Danger List</ListGroup.Item>
        <ListGroup.Item variant="warning">Warning List</ListGroup.Item>
        <ListGroup.Item variant="info">Info List</ListGroup.Item>
        <ListGroup.Item variant="light">Light List</ListGroup.Item>
        <ListGroup.Item variant="dark">Dark List</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default SimpleList;
