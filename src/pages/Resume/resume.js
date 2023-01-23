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
    render(){
        return(
            <>
            <Timeline className={css.top_component+" "+css.timeline} />
            <div className={css.top_component+" "+css.main_box}>
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
            </>
        );
    }
}

export default Resume;