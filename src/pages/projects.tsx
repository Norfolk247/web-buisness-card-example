import React from 'react';
import {Accordion, Col, Row, Image, Container} from "react-bootstrap";
import {projectsData} from "../variables/projectsData";

const Projects = () => {
    return (
        <Container>
            <div className='page mx-auto p-3 rounded bg-light m-3'>
                {projectsData.map(({header, body, images}, index) => (
                    <div key={header} className='mb-5'>
                        <h2>{header}</h2>
                        <div className='mb-4'>{body}</div>
                        <Accordion>
                            <Accordion.Item eventKey={`${index}`}>
                                <Accordion.Header>Скриншоты</Accordion.Header>
                                <Accordion.Body>
                                    <Row >
                                        {images.map((image,index)=> <Col key={index+image} md={3}>
                                            <Image className='my-2' src={image} fluid/>
                                        </Col>)}
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                ))}
                {/*<Accordion>
                {projectsData.map(({header, body, images}, index) =>
                    <Accordion.Item key={index} eventKey={`${index}`}>
                        <Accordion.Header>{header}</Accordion.Header>
                        <Accordion.Body>
                            {body}
                            <Row >
                                {images.map((image,index)=> <Col key={index+image} md={3}>
                                    <Image className='my-2' src={image} fluid/>
                                </Col>)}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>*/}
            </div>
        </Container>
    );
};

export default Projects;