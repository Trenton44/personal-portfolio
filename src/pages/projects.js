import React from "react";

import "./pages.css";
import css from "./projects.module.css";

import HiddenBlock from "../components/HiddenBlock/hiddenblock.js";
import GitHubLogo from "../images/github-mark-white.png";
class Projects extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
        <div className={css.main_content}>
            <div className={css.project_content}>
                <HiddenBlock src={GitHubLogo} href="https://github.com/Trenton44/VexGate-API">
                    <InternalContent className={css.internal_project_content} title="VexGate API" >
                        <h4> Technology Stack: NodeJS/ReactJS/MongoDB/AWS(Route53, ECS, ALB)</h4>
                        <p> 
                            A project using the Bungie API to allow players to access and manage their inventory from the web. <br />
                            The goal is to provide an easy-to-use method of accessing the Bungie API, with the more difficult aspects of implementation, such as authentication & manifest fetching handled automatically. <br />
                            This way, users can focus more on their front-end, creating apps users can use to enrich their experience with Destiny 2.
                        </p>
                    </InternalContent>
                </HiddenBlock>
            </div>
            <div className={css.project_content}>
                <HiddenBlock src={GitHubLogo} href="https://github.com/Trenton44/GameofLife-WebAuto">
                    <InternalContent className={css.internal_project_content} title="Game of Life - Canvas">
                        <h4> Technology Stack: HTML/CSS/JS</h4>
                        <p> 
                            Conway's Game of Life, built within an html canvas. <br />
                            The goal with this project was to get some experience manipulating and managing object in a canvas manually,
                            and become familiar with pixel-level manipulation.
                        </p>
                    </InternalContent>
                </HiddenBlock>
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