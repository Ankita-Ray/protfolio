import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';
 

function HomeNavbar() { 
    
    return (
        // <Container>
            <Navbar   variant="dark"  fixed="top" expand="lg"  style={{backgroundColor:"#022f5c"}}>
                <Container className={styles.navContainer}>
                    <Navbar.Brand href="#home">
                        <Image src="/../public/logo.png" alt="logo" width="50" height="50" /> 
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {/* <div className={styles.c} style={{alignItems:'center',display:'flex', width: 150, height: 50, backgroundImage: "url(/cloud.png)", zIndex: -1, backgroundRepeat: "no-repeat" }}> */}
                        <Nav.Link href="#home" className={styles.navText}>Home</Nav.Link>
                    {/* </div>
                    <div style={{alignItems:'center',display:'flex',width: 150, height: 50, backgroundImage: "url(/cloud.png)", zIndex: -1, backgroundRepeat: "no-repeat" }}> */}
                                <Nav.Link href="#aboutme" className={styles.navText}>About</Nav.Link>
                    {/* </div>
                    <div style={{ alignItems:'center',display:'flex',width: 150, height: 50, backgroundImage: "url(/cloud.png)", zIndex: -1, backgroundRepeat: "no-repeat" }}> */}
                                <Nav.Link href="#projects" className={styles.navText}>Othepr</Nav.Link>
                    {/* </div>
                    <div style={{alignItems:'center',display:'flex', width: 150, height: 50, backgroundImage: "url(/cloud.png)", zIndex: -1, backgroundRepeat: "no-repeat" }}> */}
                                <Nav.Link href="#contactme" className={styles.navText}>Ctherme</Nav.Link>
                    {/* </div> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
        // </Container>
    )
}

export default HomeNavbar;
