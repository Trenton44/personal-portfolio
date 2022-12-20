import React from 'react';
import Clock from './Clock';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="top-container">
                <Clock />
            </div>
            
        );
    }
}

export default App;