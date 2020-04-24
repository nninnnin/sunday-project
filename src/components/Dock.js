import React from 'react';
import React from '/components/ImgContainer.js';

class Dock extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="dock">
                <div className="imgs">
                    <ImgContainer posts={posts}/>
                </div>
            </div>
        )
    }
}

export default Dock