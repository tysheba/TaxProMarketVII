import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// ProListItem renders a bootstrap list item containing data from the recipe api call
export const ProListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.fName}</h3>
          <p>Year: {props.year}</p>
          <a rel="noreferrer noopener" target="_blank" href="/">
            Go to Profile!
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);