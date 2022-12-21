import React from "react";
import Container from "react-bootstrap/Container";
import ProjectButton from "./projectButton.js";
import GitHubImage from "./images/github-mark-white.png";
import CTEC295 from "./images/CTEC-295-drawicon.png";
import CyberStorm from "./images/CSC-442-Cyberstorm.jpg";
import DestinyLogo from "./images/DestinyLogo.png";
import { Route, Routes, useLocation } from "react-router-dom";

const ContainerCSS = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "1em 0 1em 0"
};

const HeaderCSS = {
    textAlign: "center",
    color: "white",
    paddingBottom: "0.5em",
    maxWidth: "75%",
    margin: "auto"
};

class ContentSpace extends React.Component {
    render(){
        return(
            <>
            <h2 className="border-bottom border-3" style={HeaderCSS}> Header </h2>
                <Routes>
                    <Route path="/home" element={
                        <Container style={{ paddingTop: "1em" }}>
                        <p style={{ color: "white", fontSize: "1.3em"}}>
                            Welcome to my website!<br />
                            The navigtion bar will get you wherever you need to go,<br />feel free to explore!<br />
                        </p>
                        </Container>
                    } />
                    <Route path="/about" element={
                        <Container style={{ paddingTop: "1em" }}>
                            <p style={{ color: "white", fontSize: "1.3em"}}> 
                                Hello! Welcome to my website! I'm glad you're here!<br />
                                My name is Trenton Choate.<br />
                                If you're reading this, you've likely stumbled upon it through my GitHub or my resume. Thanks for taking the time to look! <br /><br />
                                About Me: <br />
                                I'm a 23 year old developer, currently working for IBM.<br />
                                My strengths are in C++, NodeJs, and Javascript<br />
                                When I'm not working on one of my projects, I'm usually playing games or watching a new show.<br />
                                That's all for introductions, feel free to explore my work!
                            </p>
                        </Container>
                    } />
                    <Route path="/projects" element={
                        <>
                        <Container style={ContainerCSS}>
                            <ProjectButton src={DestinyLogo} alt="Link to my VexGate-API repo" name="VexGate-API" href="https://github.com/Trenton44/VexGate-API" />
                            <ProjectButton src={DestinyLogo} alt="Link to my VexGate-Network repo" name="VexGate-Network" href="https://github.com/Trenton44/VexGate-Network" />
                        </Container>
                        <Container style={ContainerCSS}>
                            <ProjectButton src={CTEC295} alt="Link to my CTEC-295 Final Project" name="CTEC-295 Final" href="https://github.com/Trenton44/CTEC295-Project"/>
                            <ProjectButton src={CyberStorm} alt="Link to the repo used for my CSC-442 Cyberstorm" name="CSC-442 'CyberStorm'" href="https://github.com/Trenton44/CSC-442-_-Cyberstorm"/>
                        </Container>
                        </>
                    } />
                </Routes>
            </>
        );
    }
}

export default ContentSpace;