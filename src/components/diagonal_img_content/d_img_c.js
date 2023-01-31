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
/*
<div className={css.image_container}>
    <div className={css.image_box}>
        <div className={css.image_clipper}>
            <img className={css.clipped_image} src={this.props.src} />
        </div>
    </div>
</div>
<div className={css.content_box}>
    {this.props.children}
</div>
*/
export default DImgC;