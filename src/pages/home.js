import React from "react";
import css from "./home.module.css";
import Me from "../images/Me.jpg";

class Home extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
        <div className={css.content_box}>
            <div className={css.title_content}> 
                <h1> Trenton Choate </h1>
                <h2> Fullstack Developer </h2>
            </div>
            <div className={css.about_content}>
                <div className={css.about_box_cutter}>
                    <img className={css.self_picture} src={Me} />
                </div>
                <div className={css.right_content_container}>
                    <div className={css.right_content_box}>
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
                </div>
            </div>
            <div style={{height: "400px", width: "100%"}}></div>
            <footer className={css.page_footer}>
                <h1> Socials: </h1>
            </footer>
        </div>
        );
    }
}

export default Home;