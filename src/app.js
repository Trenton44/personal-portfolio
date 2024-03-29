import React from "react";
import Navigation from "./components/navigation/navigation.js";
import Home from "./pages/home.js";
import Projects from "./pages/projects.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
    constructor(props){ super(props); }
    render(){
        return(
            <BrowserRouter basename="/personal-portfolio">
                <Navigation />
                <Routes>
                    <Route default path="/" element={ <Home/> } />
                    <Route path="/projects" element= { <Projects /> } />
                </Routes>
            </BrowserRouter>
        );
    }
}


export default App;