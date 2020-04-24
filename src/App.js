import React from 'react';
import Dock from './components/Dock.js';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Dock posts={this.props.posts}>
            </Dock>
        )
    }
}

export default App