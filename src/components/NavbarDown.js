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

export const NavbarDown =() =>(
    <Style>
        <Navbar expand="lg">
            <Navbar.Brand className="nabard" href="/">Guitar-Shop</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
           
    </Style>
               
);
