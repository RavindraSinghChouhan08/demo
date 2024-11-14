import { Link } from "react-router-dom";
import './Navbar1.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contact from "./Contact";
import { useState } from "react";



function Navbar1() {

    // const [name,setName] = useState('');

    // const [value, setValue] = useState("");

    // const cleartext = () => {
    //     setValue('')
    // }



    return (

        <div>

            <Navbar expand="lg" className="bgclr" data-bs-theme="dark">

                <Container>

                    <Navbar.Brand href="#home"><b>WORLD OF <span className="text-danger">MOVIES</span></b></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link href="#home"> <Link to="/" className="text-white hm ms-5">Movie Recommender</Link></Nav.Link>

                            <Nav.Link><Link to="/Contact" className="text-white hm">Contact</Link></Nav.Link>

                            <Navbar.Brand href="#home">

                                <Form>

                                    <Form.Control type="search" placeholder="Search Movie"/>
                                     {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                                     <button onClick={cleartext}>x</button> */}
                                </Form>

                            </Navbar.Brand>

                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

            





        </div >
    )
}
export default Navbar1;

