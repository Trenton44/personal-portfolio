import React from "react";
import Button from "react-bootstrap/Button";
import "./projectButton.css";

class projectButton extends React.Component {
    render(){
        return(
            <>
            <Button variant="outline-light" className="project-button">
                <img src={this.props.src} alt={this.props.alt} />
                <p>{this.props.name}</p>
            </Button>
            </>
        );
    }
}

export default projectButton;