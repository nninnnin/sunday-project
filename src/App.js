import {hot} from 'react-hot-loader/root';
import React, { Fragment } from 'react';

import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Dock from './components/Dock.js';



class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Nav/>
                <Main/>
                <Dock posts={this.props.posts}>
                </Dock>
            </Fragment>
        )
    }
}

export default hot(App);