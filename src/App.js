import React, { Fragment } from 'react';
import {hot} from 'react-hot-loader/root';

import Dock from './components/Dock.js';
import Main from './components/Main.js'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Main/>
                <Dock posts={this.props.posts}>
                </Dock>
            </Fragment>
        )
    }
}

export default hot(App)