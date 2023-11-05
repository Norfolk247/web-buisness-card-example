import React from 'react';
import {Form, Button, Container} from 'react-bootstrap'

const Contacts = () => {
    return (
        <Container>
            <div className='page mx-auto p-3 rounded bg-light m-3'>
                <div style={{maxWidth: 480}} className='mx-auto'>
                    <h1 className='m-3 mx-auto'>Наши контакты</h1>
                    <div className='p-3 mx-auto'>
                        <p>
                            <i className="bi bi-telegram m-2"/>
                            <a href='#' className='link-secondary link-opacity-50-hover link-underline-opacity-0'>Telegram</a>
                        </p>
                        <p>
                            <i className="bi bi-instagram m-2"/>
                            <a href='#' className='link-secondary link-opacity-50-hover link-underline-opacity-0'>Instagram</a>
                        </p>
                        <p>
                            <i className="bi bi-envelope-at m-2"></i>
                            <a href='mailto:#' className='link-secondary link-opacity-50-hover link-underline-opacity-0'>Mail</a>
                        </p>
                    </div>
                    <h1 className='mx-auto'>Оставить заявку</h1>
                    <Form className='m-3 p-3 mx-auto border rounded border-dark'>
                        <Form.Control className='mb-3' placeholder='Ваше имя'/>
                        <Form.Control className='mb-3' placeholder='Ваш телефон' type='number'/>
                        <Button type='submit'>Отправить</Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Contacts;