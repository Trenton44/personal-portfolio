import React from "react";

import css from "./timeline.module.css";

class Timeline extends React.Component {
    constructor(props){ 
        super(props);
        this.state = { sections: this.props.sections ? this.props.sections : [] };
    }
    render(){
        return(
            <div className={this.props.className}>
                {this.state.sections.map(section => {
                    return(
                        <div>
                            <p> {section} </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Timeline;