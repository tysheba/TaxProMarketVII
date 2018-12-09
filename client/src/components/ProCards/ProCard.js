import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
  import "./ProCard.css";

  const ProfCard = props => {
    return (
      <div className="procard">
        <Card>
          {/* <CardImg top width="100%" src={props.thumbnail || "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"} /> */}
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.summary}</CardText>
              <a href={props.link}>{props.link}</a>
          </CardBody>
        </Card>
      </div>
  )};

  export default ProfCard;
  