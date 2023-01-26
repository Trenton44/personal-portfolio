import React from "react";

import css from "./hiddenblock.module.css";

class HiddenBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className={css.component_container+" "+this.props.className}>
            <div className={css.visible_container}>
                <img className={css.visible_image} src={this.props.src} />
            </div>
            <div className={css.hidden_container}>
                <div className={css.hidden_content}>
                    {this.props.children}
                </div>
            </div>
        </div>
        );
    }
}

export default HiddenBlock;