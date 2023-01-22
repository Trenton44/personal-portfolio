import React from "react";
import NavigationBar from "./navigation_bar/nav.js";
import Clock from "./Clock/Clock.js";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
            <BrowserRouter basename="/personal-portfolio">
                <NavigationBar />
                <div>
                    <Clock />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;