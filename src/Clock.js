import React from "react";

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
        return( 
            <p style={{ fontSize: "4em", color: "white", margin: 0 }}>{this.state.time.toLocaleTimeString()}</p> 
        ); 
    }
}

export default Clock;