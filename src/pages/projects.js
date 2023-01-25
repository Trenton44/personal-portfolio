import React from "react";
import css from "./projects.module.css";
const placeholder = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
class Projects extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
        <div className={css.main_content}>
            <h1> UNDER CONSTRUCTION </h1>
            <p style={{ fontSize: "1.3em" }}> please refer to my <span><a href="https://github.com/Trenton44">GitHub</a></span> in the meantime to see all the projects I have going on!</p>
            
        </div>
        );
    }
}

export default Projects;