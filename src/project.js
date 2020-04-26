import React from 'react';
import ReactDOM from 'react-dom';
import Dock from './components/Dock'
import Main from './components/Main'

const mainContainer = document.querySelector('main');
const dockContainer = document.querySelector('.dockContainer');
        
fetch('/project')
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
    const projects = data;

    ReactDOM.render(<Main/>,mainContainer);
    ReactDOM.render(<Dock projects={projects}/>,dockContainer);
})