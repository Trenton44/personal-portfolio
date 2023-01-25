import React from "react";
import css from "./projects.module.css";
import { default as ImageContainer } from "../components/sliced_image_content/container.js";

class Projects extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
        <div className={css.main_content}>
            <div className={css.project_container}>
                <ImageContainer>
                    <h1> Hello World! </h1>
                    <h2> How are you? </h2>
                </ImageContainer>
            </div>
        </div>
        );
    }
}

export default Projects;