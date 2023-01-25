import React from "react";

import css from "./timeline.module.css";

class Timeline extends React.Component {
    constructor(props){ 
        super(props);
        this.state = { 
            sections: this.props.sections ? this.props.sections : []
        };
    }
    render(){
        return(
            <div id={this.props.id} className={this.props.className+"  "+css.timeline_container}>
                { this.state.sections.map((section, index) => <p className={css.timeline_item} key={index}> {section} </p>) }
            </div>
        );
    }
}
//
export default Timeline;