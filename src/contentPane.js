import React from "react";
import Container from "react-bootstrap/Container";
import ProjectButton from "./projectButton.js";
import GitHubImage from "./images/github-mark-white.png";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

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
            <HashRouter hashType="slash">
                <Routes>
                    <Route path="/home" render={() =>(
                        <>
                        <Container>
                            <p> Home Content </p>
                        </Container>
                        </>
                    )}>
                    </Route>
                    <Route path="/about" render={() =>(
                        <>
                        <Container>
                            <p> About Content </p>
                        </Container>
                        </>
                    )}>
                    </Route>
                    <Route path="/projects" render={() => (
                        <>
                            <Container style={ContainerCSS}>
                                <ProjectButton src={GitHubImage} alt="GitHub Logo" name="GitHub" />
                                <ProjectButton src={GitHubImage} alt="GitHub Logo" name="GitHub" />
                            </Container>
                            <Container style={ContainerCSS}>
                                <ProjectButton src={GitHubImage} alt="GitHub Logo" name="GitHub" />
                                <ProjectButton src={GitHubImage} alt="GitHub Logo" name="GitHub" />
                            </Container>
                        </>
                    )}>
                    </Route>
                </Routes>
            </HashRouter>
            </>
        );
    }
}

export default ContentSpace;