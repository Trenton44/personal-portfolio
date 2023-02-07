import React from "react";

import "./pages.css";
import css from "./home.module.css";

import DImgC from "../components/diagonal_img_content/d_img_c.js";
import Me from "../images/landscapeMe.png";

class Home extends React.Component {
    constructor(props) { super(props); }
    render(){
        return(
            <div className={"content_container "+css.home_container}>
                <div className={css.title_content}>
                    <h1> Trenton Choate </h1>
                    <h2> Fullstack Developer </h2>
                </div>
                <DImgC src={Me} className={css.about_container}>
                    <div className={css.about_content}>
                        <h1> About Me </h1>
                        <h2> Fullstack Web Developer </h2>
                        <h3> Graduated Bossier Parish Community College </h3>
                        <h4> Associate of Applied Science, Cyber Technology </h4>
                        <h3>{"Attended Louisiana Tech University (Junior, Unfinished)"}</h3>
                        <h4> Bachelor of Engineering, Cyber Engineering </h4>
                        <p> 
                            A software developer with a focus on web development, most notably in ReactJS & NodeJS <br />
                            and in using the <span><strong>AWS Cloud</strong></span>, holding the <span><strong>AWS Developer - Associate certification</strong></span>.
                        </p>
                        <a href="https://www.credly.com/users/trenton-choate"> View Credentials </a>
                    </div>
                </DImgC>
                <div className={css.spacer}></div>
                <footer className={css.footer_content}>
                    <div className={css.contacts_content}>
                        <h1> Socials </h1>
                        <a href="https://www.linkedin.com/in/trenton44/" style={{ backgroundColor: "blue" }}>LinkedIn</a>
                        <a href="mailto:tchoate44@gmail.com" style={{ backgroundColor: "darkred" }}>Gmail</a>
                    </div>
                    <div className={css.background_credit} style={{ backgroundColor: "lightpurple" }}>
                        <a href="https://commons.wikimedia.org/wiki/File:Usa-world-trade-center-skyscrapers-reflection-night-skyline-cityscape.jpg">Background Image Credit: <span style={{ color: "purple"}}>Kozak4512</span></a>
                        <a style={{ color: "purple" }} href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>
                    </div>
                </footer>
            </div>
            
        );
    }
}

export default Home;