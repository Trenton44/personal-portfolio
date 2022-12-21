import React from 'react';
import Clock from './Clock';
import ContentSpace from "./contentPane.js";
import Navigation from "./navigation.js";
import { Col, Container, Row } from "react-bootstrap";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FrameworkContainerCSS = {
    flexGrow: 2,
    marginLeft: "60%",
    width: "40%"
};
const ContentFrameworkCSS ={
    height: "100%",
    alignItems: "flex-start",
    paddingTop: "6%"
};

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HashRouter hashType="slash">
                <Navigation />
                <Container fluid style={FrameworkContainerCSS} >
                    <Row style={ContentFrameworkCSS}>
                        <Col>
                            <ContentSpace />
                        </Col>
                    </Row>
                </Container>
            </HashRouter>
        );
    }
}

export default App;