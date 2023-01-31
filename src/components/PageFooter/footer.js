import React from "react";

import css from "./footer.module.css";

class Footer extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
            <footer>
                <h1> Contact: </h1>
                <div className={css.socials_content}>
                    {this.props.items.map((item, index) =>{
                        return(
                            <a key={index} href={item.href}>
                                <img src={item.src} />
                                <p>{item.description}</p>
                            </a>
                        );
                    })}
                </div>
                <div className={css.background_credit}>
                    <a href="https://commons.wikimedia.org/wiki/File:Usa-world-trade-center-skyscrapers-reflection-night-skyline-cityscape.jpg">Background Image Credit: Kozak4512</a>
                    <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>
                </div>
            </footer>
        );
    }
}

export default Footer;