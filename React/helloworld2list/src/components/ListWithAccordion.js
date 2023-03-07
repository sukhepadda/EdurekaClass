import React from "react";
import Accordion from "react-bootstrap/Accordion";

function ListWithAccordion() {
  const listOfWords = [
    {
      id: "1",
      text: "Primary List Comming from Component",
      variant: "primary",
      img: "https://media.tenor.com/WU0vkiK5dNAAAAAi/memes-cat.gif",
    },
    {
      id: "2",
      text: "Secondary List Comming from Component",
      variant: "secondary",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: "3",
      text: "Success List Comming from Component",
      variant: "success",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: "4",
      text: "Danger List Comming from Component",
      variant: "danger",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: "5",
      text: "Warning List Comming from Component",
      variant: "warning",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: "6",
      text: "Info List Comming from Component",
      variant: "info",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: "7",
      text: "Light List Comming from Component",
      variant: "light",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: "8",
      text: "Dark List Comming from Component",
      variant: "dark",
      img: "data:image/jpeg;base64,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",
    },
  ];

  const Items = ({ item }) => (
    <Accordion.Item eventKey={item.id}>
      <Accordion.Header>{item.text}</Accordion.Header>
      <Accordion.Body>
        <img className="img-fluid" src={item.img} placeholder="cat img" />
      </Accordion.Body>
    </Accordion.Item>
  );
  return (
    <div className="container mt-4">
      {" "}
      <h3>List With Accordion</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ListWithAccordion;
