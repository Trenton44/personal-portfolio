import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import GitHubImage from "./images/github-mark-white.png";
import LinkedInImage from "./images/LinkedIn.png";
const NavLinkCSS = {
    fontSize: "1em",
    color: "white",
};

const NavBrandCSS = { 
    color: "white", 
    fontSize: "1em",
    alignItems: "top"
};

class Navigation extends React.Component{
    render(){
        return (
            <Navbar bg="transparent" className="border-bottom" style={{ height: "2.5em", fontSize: "1em" }}>
                <Container style={{ justifyContent: "flex-start" }}>
                    <Navbar.Brand style={NavBrandCSS} href="https://github.com/Trenton44/personal-portfolio" >
                        <img width="35em" height="35em" className="d-inline-block align-center" src={GitHubImage} alt="The GitHub Logo" />
                        {" "}GitHub
                    </Navbar.Brand>
                    <Navbar.Brand style={NavBrandCSS} href="https://www.linkedin.com/in/trenton44/" >
                        <img width="45em" height="40em" className="d-inline-block align-center" src={LinkedInImage} alt="The LinkedIn Logo" />
                        {" "}LinkedIn
                    </Navbar.Brand>
                </Container>
                <Container style={{ justifyContent: "flex-end", gap: "2em" }} >
                    <Nav.Link style={NavLinkCSS} to="/" > Home </Nav.Link>
                    <Nav.Link style={NavLinkCSS} to="/about" > About </Nav.Link>
                    <Nav.Link style={NavLinkCSS} to="/projects" > Projects </Nav.Link>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;