import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

import GitHubImage from "./images/github-mark-white.png";
const NavBrandCSS = {
    fontSize: "1.3em",
    color: "white",
};
class Navigation extends React.Component{
    render(){
        return (
            <Navbar bg="transparent" className="border-bottom">
                <Container>
                    <Navbar.Brand style = {{ color: "white", fontSize: "2.5em" }} href="https://github.com/Trenton44?tab=repositories" >
                        <img width="60em" height="60em" className="d-inline-block align-top" src={GitHubImage} alt="The GitHub Logo" />
                        {" "}GitHub
                    </Navbar.Brand>
                </Container>
                <Container style={{ justifyContent: "flex-end", gap: "2em" }} >
                    <Navbar.Brand style={NavBrandCSS} href="#home" > Home </Navbar.Brand>
                    <Navbar.Brand style={NavBrandCSS} href="#home" > About </Navbar.Brand>
                    <Navbar.Brand style={NavBrandCSS} href="#home" > Projects </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;