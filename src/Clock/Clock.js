import React from "react";
import css from "./Clock.module.css";
/**
 * React Component for tracking time, displayed as a <p> element.
*/
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date(),
            levels: [
                {
                    getValue: function(date){ return date.getSeconds(); },
                    increment: 60,
                    color: "green",
                },
                {
                    getValue: function(date){ return date.getMinutes(); },
                    increment: 60,
                    color: "blue",
                },
                {
                    getValue: function(date){ return date.getHours(); },
                    increment: 24,
                    color: "red",
                }
            ],
            radius: 10,
            strokeSize: 2,
            gap: 10
        };
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    getRadius = () => this.state.radius+this.state.gap+this.state.strokeSize;
    tick = () => this.setState({ time: new Date() });
    clockStroke = (tick, radius, increment) => {
        let circ = 2*Math.PI*radius;
        let inc = circ/increment;
        let fill = (tick+1)*inc;
        return fill+" "+(circ-fill);
    };
    render(){ 
        return(
            <svg className={css.clock_component}>
                {this.state.levels.map((level, index) => 
                    <circle
                        key={ index }
                        className={ css.clock_circle }
                        r={ this.getRadius().toString()+"px" }
                        color={ level.color }
                        strokeWidth={ this.state.strokeSize }
                        strokeDasharray={ this.clockStroke(level.getValue(this.state.time),this.getRadius(), level.increment) }
                    />
                )}
            </svg>
        );
    }
}

export default Clock;