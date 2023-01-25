import React from "react";

import GitHubImage from "../../images/github-mark-white.png";
import LinkedInImage from "../../images/LinkedIn.png";

import SideBarMenu from "./sidebar/sidebar.js";
import css from "./nav.module.css";

class Navigation extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
            <div className={css.navigation_bar}>
                <div className={css.navigation_menu+" "+css.left_menu} >
                    <a href="https://github.com/Trenton44/personal-portfolio" className={css.left_menu_item} style={{gap: "10px"}}>
                        <img src={GitHubImage}/>
                        <p> GitHub </p>
                    </a>
                    <a href="https://www.linkedin.com/in/trenton44/" className={css.left_menu_item}>
                        <img src={LinkedInImage}/>
                        <p> LinkedIn </p>
                    </a>
                </div>
                <div className={css.navigation_menu+" "+css.right_menu}>
                    <SideBarMenu>
                        <a className={css.navigation_right_menu_items} href={ process.env.PUBLIC_URL + "/"}> Home </a>
                        <a className={css.navigation_right_menu_items} href={ process.env.PUBLIC_URL + "/projects"}> Projects </a>
                        <a className={css.navigation_right_menu_items} href={ process.env.PUBLIC_URL + "/resume"}> Resume </a>
                    </SideBarMenu>
                </div>
            </div>
        );
    }
}

export default Navigation;