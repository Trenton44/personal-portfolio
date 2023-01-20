import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import GitHubImage from "../images/github-mark-white.png";
import LinkedInImage from "../images/LinkedIn.png";

import SideBarMenu from "./sidebar/sidebar.js";
import css from "./nav.module.css";

class NavigationBar extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
            <Navbar bg="transparent" className={css.navigation_bar+" border-bottom" }>
                <Container className={css.navigation_left_menu}>
                    <Navbar.Brand className={ css.navigation_left_menu_items } href="https://github.com/Trenton44/personal-portfolio">
                        <img className={css.navigation_left_menu_icons+" d-inline-block align-center"} src={GitHubImage} alt="The GitHub Logo" />
                        {" "}GitHub
                    </Navbar.Brand>
                    <Navbar.Brand className={ css.navigation_left_menu_items } href="https://www.linkedin.com/in/trenton44/" >
                        <img className={css.navigation_left_menu_icons+" d-inline-block align-center"} src={LinkedInImage} alt="The LinkedIn Logo" />
                        {" "}LinkedIn
                    </Navbar.Brand>
                </Container>
                <SideBarMenu>
                    <Nav.Link className={css.navigation_right_menu_items} href={ process.env.PUBLIC_URL + "/"} > Home </Nav.Link>
                    <Nav.Link className={css.navigation_right_menu_items} href={ process.env.PUBLIC_URL + "/about" } > About </Nav.Link>
                    <Nav.Link className={css.navigation_right_menu_items} href={ process.env.PUBLIC_URL + "/projects" } > Projects </Nav.Link>
                </SideBarMenu>
            </Navbar>
        );
    }
}

export default NavigationBar;