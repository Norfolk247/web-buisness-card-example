import React from 'react';
import {Route, Routes, useLocation, NavLink} from "react-router-dom";
import Contacts from "./pages/contacts";
import {Container, Nav, Navbar} from "react-bootstrap";
import Projects from "./pages/projects";
import {SwitchTransition, CSSTransition} from "react-transition-group";

import Skills from "./pages/skills";
import Main from "./pages/main";

const PageTransitionComponent = ({children}: React.PropsWithChildren) => {
    const location = useLocation()
    return (
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                timeout={300}
                classNames='page'
                unmountOnExit
            >
                {(match) => (children)}
            </CSSTransition>
        </SwitchTransition>
    )
}

function App() {
    return (
        <div className="App">
            <Navbar>
                <Nav className='mx-auto'>
                    <Nav.Link as={NavLink} to='/' >Главная</Nav.Link>
                    <Nav.Link as={NavLink} to='/projects' >Проекты</Nav.Link>
                    <Nav.Link as={NavLink} to='/skills' >Умения</Nav.Link>
                    <Nav.Link as={NavLink} to='/contacts' >Контакты</Nav.Link>
                </Nav>
            </Navbar>
            <Routes>
                <Route path='/projects' element={<PageTransitionComponent>
                    <Projects/>
                </PageTransitionComponent>}/>
                <Route path='/skills' element={<PageTransitionComponent>
                    <Skills/>
                </PageTransitionComponent>}/>
                <Route path='/contacts' element={<PageTransitionComponent>
                    <Contacts/>
                </PageTransitionComponent>}/>
                <Route path='*' element={<PageTransitionComponent>
                    <Main/>
                </PageTransitionComponent>}/>
            </Routes>
        </div>
    );
}

export default App;
