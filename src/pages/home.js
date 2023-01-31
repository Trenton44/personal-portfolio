import React from "react";

import "./pages.css";
import css from "./home.module.css";

import DImgC from "../components/diagonal_img_content/d_img_c.js";
import Footer from "../components/PageFooter/footer.js";

import Me from "../images/Me.jpg";
import LinkedInImage from "../images/LinkedIn.png";
const GmailLogo = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg";

class Home extends React.Component {
    constructor(props) { super(props); }
    render(){
        return(
            <div className={"content_container "+css.home_container}>
                <div className={css.title_content}>
                    <h1> Trenton Choate </h1>
                    <h2> Fullstack Developer </h2>
                </div>
                <DImgC src={Me}className={css.about_container}>
                    <div className={css.DimgC_content}>
                        <h1> About Me </h1>
                        <h2> Associate Application Developer @IBM </h2>
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
                <div style={{height: "400px", width: "100%"}}></div>
                <Footer items={
                    [
                        {
                            href:"https://www.linkedin.com/in/trenton44/",
                            src: LinkedInImage,
                            description: "LinkedIn"
                        },
                        {
                            href: "mailto:tchoate44@gmail.com",
                            src: GmailLogo,
                            description: "tchoate44@gmail.com"
                        }
                    ]
                }/>
            </div>
            
        );
    }
}

export default Home;