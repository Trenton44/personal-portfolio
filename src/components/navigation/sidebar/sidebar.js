import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import burgerIcon from "./burger_icon.jpg";
import css from "./sidebar.module.css";

class SideBarMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true,

        }
    }
    componentDidMount(){
        document.onclick = (e) =>{
            let isTarget= e.target.id=== "sidebar_hidden_menu" || e.target.id === "burger_icon";
            if(!isTarget)
                this.setState({ hidden: true });
            return true;
        }
    }
    render(){
        return(
            <>
            <Container className={css.expanded_menu_items}>
                { this.props.children }
            </Container>
            <img 
                id="burger_icon" 
                className={css.expand_sidebar_icon}
                alt="Icon for accessing the hidden menu."
                src={burgerIcon}
                onClick={() => this.setState({ hidden: !this.state.hidden })}
            />
            <div 
                id="sidebar_hidden_menu" 
                className={css.hidden_menu_items} 
                style={{ display: this.state.hidden ? "none" : "flex" }}
                >
                <p style={{color: "white" }}> Menu </p>
                {this.props.children}
                
            </div>
            </>
        );
    }
}

export default SideBarMenu;