import React from "react";

import css from "./timeline.module.css";

class Timeline extends React.Component {
    constructor(props){ 
        super(props);
        this.state = { 
            sections: this.props.sections ? this.props.sections : [],
            active: 0
        };
    }
    render(){
        let first = this.state.active == 0 ? 0 :
            this.state.active == this.state.sections.length-1 ? this.state.sections.length-3 : 
            this.state.active-1;
        let last = this.state.active == 0 ? 2 :
            this.state.active == this.state.sections.length-1 ? this.state.sections.length-1 :
            this.state.active+1;
        console.log([first, last]);
        return(
            <div id={this.props.id} className={this.props.className+"  "+css.timeline_container}>
                { this.state.sections.slice(first, last).map((section, index) => <p style={{color: "white"}} key={index}> {section} </p>) }
            </div>
        );
    }
}
//
export default Timeline;