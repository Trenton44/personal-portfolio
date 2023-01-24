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
                        <h1> Associate Application Developer - IBM </h1>
                        <h1> March 2022 - Present</h1>
                    </div>
                    <h3 style={{ margin: "5px" }}>Worked on Agile projects involving</h3>
                    <p>
                    Lift & Shifting client databases to AWS Cloud to lower cost and reduce processing times
                    <br />
                    {"Refactoring batch scripts (C++) to reduces processing times from 4 hours to <1"}
                    </p>
                </div>
                <div className={css.job_content}>
                    <div className={css.job_header}>
                        <h1> Apprentice Software Developer - IBM </h1>
                        <h1> March 2021 - March 2022 </h1>
                    </div>
                    <h3 style={{ margin: "5px" }}> Studied and trained under mentors and senior developers through the IBM Apprentice Program </h3>
                    <p>
                    Developed and tested projects created by myself and other apprentices in multiple languages
                    <br />
                    Expanded my knowledge in multiple languages, such as C/C++, NodeJS, Python, ReactJS, HTML/CSS, and Java
                    <br />
                    Gained experience with several notable technologies: AWS & IBM Cloud, GitHub, Kubernetes/Docker, Linux, and CI/CD pipelines such as AWS CodePipeline and Jenkins
                    </p>
                </div>
                <div className={css.job_content}>
                    <div className={css.job_header}>
                        <h1> IT Technician Intern - Bossier Parish School Board </h1>
                        <h1> March 2019 - March 2021 </h1>
                    </div>
                    <h3 style={{ margin: "5px" }}> Accompanied senior technicians to parish schools & centers, resolving support tickets </h3>
                    <p>
                    Setup & repair technology for district employees
                    <br />
                    Install & maintain network infrastructure
                    </p>
                </div>
                <div className={css.job_content}>
                    <div className={css.job_header}>
                        <h1> Multimedia Sound Director - FUMC Bossier </h1>
                        <h1> June 2020 - November 2020 </h1>
                    </div>
                    <h3 style={{ margin: "5px" }}> Coordinator and Senior lead of the audio/visual teams for Sunday Services </h3>
                    <p>
                    Lead video/audio teams during Sunday Services
                    <br />
                    Install and maintain audio/video equipment and verify functionality for upcoming services
                    <br />
                    Coordinate & train volunteers
                    </p>
                </div>
            </div>
        );
    }
}

export default Experience;