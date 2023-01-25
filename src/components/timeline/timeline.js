import React from "react";

import css from "./timeline.module.css";

class Timeline extends React.Component {
    constructor(props){ 
        super(props);
        this.state = { 
            sections: this.props.sections ? this.props.sections : []
        };
    }
    changeLocation = (urifrag) => {
        window.location.hash = urifrag;
        document.getElementById(window.location.hash).scrollIntoView();
    };
    render(){
        return(
            <div id={this.props.id} className={this.props.className+"  "+css.timeline_container}>
                { this.state.sections.map((section, index) => <p onClick={() => this.changeLocation(section)} className={css.timeline_item} key={index}> {section} </p>) }
            </div>
        );
    }
}
//
export default Timeline;