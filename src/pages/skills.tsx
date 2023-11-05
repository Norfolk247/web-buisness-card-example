import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {skillsCardsData} from "../variables/skillsCardsData";

const Skills = () => {
    return (
        <Container>
            <div className='page mx-auto p-3 rounded bg-light m-3'>
                <Row md={3} className='g-4'>
                    {skillsCardsData.map(({image,title,text})=> (
                        <Col key={title}>
                            <Card>
                                {image ? <Card.Img src={image}/> : null}
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default Skills;