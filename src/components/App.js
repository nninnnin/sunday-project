import React from 'react';
import Dock from './Dock.js';
import ImgContainer from './ImgContainer.js'

class App extends React.Component{
    handleClick(){
        //클릭한 컴포넌트의 정보를 가져다가 main에 띄워야 한다.
    }

    render(){
        <Dock imgs={
            <ImgContainer handleClick={handleClick}/>}>
        </Dock>
    }
}