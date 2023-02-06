import React from "react";

import css from "./d_img_c.module.css";

class DImgC extends React.Component{
    constructor(props){ super(props); }
    render(){
        return(
            <div className={this.props.className+" "+css.content_container}>
                <div className={css.image_container}>
                    <img src={this.props.src} />
                </div>
                <div className={css.text_container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default DImgC;