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
                    getValue: function(date){ return date.getHours(); },
                    increment: 24,
                    color: "red",
                },
                {
                    getValue: function(date){ return date.getMinutes(); },
                    increment: 60,
                    color: "blue",
                },
                {
                    getValue: function(date){ return date.getSeconds(); },
                    increment: 60,
                    color: "green",
                }
                
            ],
            radius: 20,
            strokeSize: 15,
            gap: 30
        };
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    getRadius = (gap) => this.state.radius+(this.state.gap*gap)+this.state.strokeSize;
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
                        stroke={level.color}
                        cx="50%" cy="50%"
                        fill="transparent"
                        r={ this.getRadius(index).toString()+"px" }
                        
                        strokeWidth={ this.state.strokeSize }
                        strokeDasharray={ this.clockStroke(level.getValue(this.state.time), this.getRadius(index), level.increment) }
                    />
                )}
                <text cx="50%" cy="50%">{this.state.time.toDateString()}</text>
            </svg>
        );
    }
}

export default Clock;