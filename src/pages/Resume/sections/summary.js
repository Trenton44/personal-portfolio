import React from "react";

import css from "./summary.module.css";
import MyPicture from "../../../images/Me.jpg";

class Summary extends React.Component{
    constructor(props){
        super(props);
    }
    changeLocation = (urifrag) => {
        window.location.hash = urifrag;
        document.getElementById(window.location.hash).scrollIntoView();
    };
    render(){
        return(
            <div className={css.body}>
                <div className={css.left_content}>
                    <h1 id="#Summary"> Summary </h1>
                    <p> Trenton is a software developer with skills in web development, particularly in the ReactJS framework, &
                    NodeJS. <br /> He has work experience with cloud computing, and is a certified AWS Developer Associate. Coming
                    from a background in Object-Oriented Programming, as a graduate from Bossier Parish Community College &
                    The IBM Apprenticeship Program, Trenton has a passion for tackling complex problems and a willingness to go
                    above and beyond to learn and grow as a developer.
                    </p>
                    <h3> Jump to a Section</h3>
                    <div className={css.shortcut_links}>
                        {this.props.sections.map(section => <a onClick={() => this.changeLocation(section)} key={section}> {section} </a>)}
                    </div>
                    <div></div>
                </div>
                <div className={css.right_content}>
                    <img className={css.my_picture} src={MyPicture}/>
                </div>
            </div>
        );
    }
}

export default Summary;