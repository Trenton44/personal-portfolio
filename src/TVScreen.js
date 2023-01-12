import React from 'react';
import Clock from './Clock';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyImage from "./images/Me.jpg";

const TVScreenCSS = {
    alignSelf: "top",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
};

const ImageCSS ={
    width: "60%",
    height: "60%",
    filter: "grayscale(60%)",
    opacity: "70%"
}
class TVScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <Container style={TVScreenCSS}>
            <Routes>
            <Route exact path="/" component={() => (<redirect to="home" />)} />
                <Route exact path="/home" element={
                    <Clock />
                } />
                <Route exact path="/about" element={
                    <img src={MyImage} style={ImageCSS}/>
                } />
                <Route exact path="/projects" element={
                    <Clock />
                } />
            </Routes>
            </Container>
            </>
        );
    }
}

export default TVScreen;