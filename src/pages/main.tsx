import React, {LegacyRef, MouseEventHandler, useEffect, useRef} from 'react';
import {Accordion, Col, Container, Image, Row} from "react-bootstrap";
import {mainPageBestProjects} from "../variables/mainPageBestProjects";
import ImageModal from "../components/ImageModal";
import './main.css'
import Contacts from "./contacts";

const useShowElementOnScroll = () => {
    const setRef: LegacyRef<HTMLHeadingElement> = (node) => {
        if (node !== null) {
            node.className = 'slideUpElement'
            observer.observe(node);
            observedDivs.push(node);
        }
    }
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                entry.target.className = 'slideUpElement-active slideUpElement-animate'
                observer.unobserve(entry.target)
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        }
    )
    const observedDivs: HTMLElement[] = [];

    useEffect(() => {
        return () => {
            observedDivs.forEach((node) => {
                observer.unobserve(node);
            });
        };
    }, []);
    return setRef
}

const Main = () => {
    const cursorRef = useRef<HTMLDivElement>(null)
    const refToAnimate = useShowElementOnScroll()

    const onMouseMoveHandler: MouseEventHandler = e => {
        if (e.pageY <= 56) {
            if (cursorRef.current) {
                cursorRef.current.style.display = 'none'
            }
            return
        }
        const x = e.pageX - 30 + 'px'
        const y = e.pageY - 30 - window.pageYOffset + 'px'
        if (cursorRef.current) {
            cursorRef.current.style.display = 'block'
            cursorRef.current.style.top = y
            cursorRef.current.style.left = x
        }
    }

    useEffect(() => {
        const removeCursorOnResize = () => {
            if (cursorRef.current) {
                cursorRef.current.style.display = 'none'
            }
        }
        window.addEventListener('resize', removeCursorOnResize)
        return () => {
            window.removeEventListener('resize', removeCursorOnResize)
        }
    }, [])

    return (
        <div className='page' onMouseMove={onMouseMoveHandler} style={{cursor: 'none'}}>
            {/*<Row>
                <Col>
                    <ImageModal className='w-50 mx-auto'>
                        <Image src='https://placehold.co/700x500' fluid/>
                    </ImageModal>
                    <h2 className='my-3'>Лучшие проекты</h2>
                    <Accordion>
                        {mainPageBestProjects.map(({title, text, images}, index) =>
                            <Accordion.Item key={index} eventKey={`${index}`}>
                                <Accordion.Header>{title}</Accordion.Header>
                                <Accordion.Body>
                                    {text}
                                    <Row>
                                        {images.map((image, index) => <Col key={index + image} md={3}>
                                            <ImageModal>
                                                <Image className='my-2' src={image} fluid/>
                                            </ImageModal>
                                        </Col>)}
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>

                </Col>
                <Col>
                    <h2>Frontend-разработчик</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis eos excepturi ipsum libero
                        minus
                        mollitia necessitatibus reprehenderit! Beatae expedita officia tenetur. Alias, explicabo, quae.
                        Ad
                        alias, atque consequuntur corporis cum doloremque dolores dolorum ducimus error expedita fugit
                        illum
                        impedit inventore ipsa iure labore laudantium minima molestias natus odio perferendis possimus
                        praesentium quam ratione rem sit, soluta suscipit tempore tenetur unde vel velit vitae voluptas.
                        Alias
                        cumque eveniet, expedita facilis optio sed temporibus. Commodi, consequatur dicta dolore
                        doloribus
                        ducimus error esse illum inventore itaque laboriosam minima nesciunt nisi nobis odit officia
                        optio quas
                        quia quod sint, ut vel velit voluptates!</p>
                    <h2>Ключевые навыки</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
            </Row>*/}
            <section className='background d-flex'>
                <div className='z-1 my-auto w-100 mx-5'>
                    <h1 className='mainPage text-end' style={{color: 'white'}}>Имя Фамилия</h1>
                    <p className='slideInElement fs-5 text-end' style={{color: 'white'}}>Современные технологии, креативные решения, высокий результат</p>
                </div>
            </section>
            <section>
                <Container className='p-5 text-center'>
                    <h2 ref={refToAnimate}>Обо мне</h2>
                    <p ref={refToAnimate}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias, aliquid
                        culpa debitis dicta itaque libero provident quaerat recusandae repellendus sint tenetur totam ut
                        velit voluptatum! Accusamus consectetur in minima nesciunt optio recusandae ut voluptate. Ad
                        enim et laboriosam, libero maiores nihil odit provident reiciendis sit soluta suscipit veniam.
                        Fugiat.</p>
                </Container>
            </section>
            <section>
                <div ref={refToAnimate}>
                    <Container>
                        <div className='row'>
                            <div className='col-lg-4 col-12 d-flex justify-content-center'>
                                <ImageModal className='w-50 mx-auto'>
                                    <Image src='https://placehold.co/500x700' fluid/>
                                </ImageModal>
                            </div>
                            <div className='col-lg-8 col-12 mt-md-0 mt-5 text-justify px-4'>
                                <h2>Frontend-разработчик</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis
                                    distinctio
                                    eaque itaque modi porro similique unde veniam voluptatem voluptatibus?</p>
                                <h3>Ключевые навыки</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>TypeScript</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            <div ref={cursorRef} className='cursor pe-none'/>
        </div>
    );
};

export default Main;