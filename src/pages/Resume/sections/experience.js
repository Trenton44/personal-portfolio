import React from "react";

import css from "./experience.module.css";

class Experience extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
            <div className={css.main_box}>
                <h1> Experience </h1>
                <div className={css.job_content}>
                    <div className={css.job_header}>
                        <h1> Associate Application Developer - IBM</h1>
                        <h1> March 2022 - Present</h1>
                    </div>
                </div>

            </div>
        );
    }
}

export default Experience;