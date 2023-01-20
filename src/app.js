import React from 'react';
import TVOverlay from "./TVScreen.js";
import ContentSpace from "./contentPane.js";
import Navigation from "./navigation.js";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FrameworkContainerCSS = {
    flexGrow: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "75%"
};
const ContentFrameworkCSS ={
    height: "100%",
    alignItems: "flex-start",
    paddingTop: "6%",
    paddingRight: "0.5em",
    flexGrow: 2,
    width: "40%"
};

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter hashType="slash">
                <Navigation />
                <Container fluid style={FrameworkContainerCSS} >
                    <Row style={{ width: "60%", flexGrow: 1, }}>
                        <TVOverlay />
                    </Row>
                    <div style={{ flexBasis: "20%", flexGrow: 1,}}></div>
                    <Row style={ContentFrameworkCSS}>
                        <Col>
                            <ContentSpace />
                        </Col>
                    </Row>
                    
                </Container>
                
            </BrowserRouter>
        );
    }
}

export default App;