import React from "react";

/**
 * React Component for tracking time, displayed as a <p> element.
*/
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { time: new Date() };
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    tick = () =>{ 
        this.setState({ time: new Date() }); 
    }
    render(){ 
        return( <p style={{ fontSize: "2em", color: "white", margin: 0 }}>{this.state.time.toLocaleTimeString()}</p> ); 
    }
}

export default Clock;