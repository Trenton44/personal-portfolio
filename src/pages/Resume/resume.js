import React from "react";

import css from "./resume.module.css";

import Timeline from "../../components/timeline/timeline.js";
import Summary from "./sections/summary.js";
import Experience from "./sections/experience.js";

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: 0,
            sections: ["Summary", "Experience", "Education", "Certifications", "Skills"]
         };
    }
    componentDidMount(){
        let resume = document.getElementById("resume-content");
        let timeline = document.getElementById("resume-timeline");
        console.log(resume);
        console.log(timeline);
        resume.addEventListener("scroll", (e) => timeline.scrollTop = resume.scrollTop);
        timeline.addEventListener("scroll", (e) => resume.scrollTop = timeline.scrollTop);
    }
    render(){
        return(
            <div className={css.top_component}>
                <Timeline id="resume-timeline" className={css.timeline} sections={this.state.sections} />
                <div id="resume-content" className={css.main_box}>
                    <div className={css.content_box}>
                        <Summary sections={this.state.sections} />
                    </div>
                    <div className={css.content_box}>
                        <Experience />
                    </div>
                    <div className={css.content_box}>
                    </div>
                    <div className={css.content_box}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;