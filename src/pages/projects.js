import React from "react";
import css from "./projects.module.css";

import HiddenBlock from "../components/HiddenBlock/hiddenblock.js";
import GitHubLogo from "../images/github-mark-white.png";
class Projects extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
        <div className={css.main_content}>
            <div className={css.project_content}>
                <a style={{height: "100%"}} href="https://github.com/Trenton44/VexGate-API">
                    <HiddenBlock src={GitHubLogo}>
                        <InternalContent className={css.internal_project_content} title="VexGate API">
                            <p> A project using the Bungie API to allow players to access and manage their inventory from the web. </p>
                        </InternalContent>
                    </HiddenBlock>
                </a>
            </div>
            <div className={css.project_content}>
                <a style={{height: "100%"}} href="https://github.com/Trenton44/GameofLife-WebAuto">
                    <HiddenBlock src={GitHubLogo}>
                        <InternalContent className={css.internal_project_content} title="Game of Life - Canvas">
                            <p> Conway's Game of Life, built within an html canvas </p>
                        </InternalContent>
                    </HiddenBlock>
                </a>
            </div>
            
        </div>
        );
    }
}

function InternalContent(props){
    return(
        <div className={css.internal_project_content}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}
export default Projects;