import React from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import styled from 'styled-components';

const Style =styled.div`
.navbar {
    background-color: #1c0d02;
    

}
.navbar-brand, .navbar-nav .nav-link{
    color: grey;
    


&:hover{
    color: #3E5F8A;
   
}
}

`;

export const Navbarnav =() =>(
    <Style>
        <Navbar className="nabar" expand="lg">
            <Navbar.Brand href="/">Guitar-Shop</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
           
                <Nav className="ml-auto">
                 <Form inline className="form">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-info">Search</Button>
                 </Form>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </Style>

)