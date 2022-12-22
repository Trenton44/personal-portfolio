import React from 'react';
import Clock from './Clock';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyImage from "./images/Me.jpg";

const TVScreenCSS = {
    width: "48%",
    height: "47%",
    marginTop: "12%",
    marginLeft: "24%",
    padding: 0,
    alignSelf: "top",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const ImageCSS ={
    width: "100%",
    height: "100%",
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