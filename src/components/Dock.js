import React from 'react';
import '../styles/Dock.css';

class Dock extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
        const {posts}=this.props;
        
        const imgs = posts.map((post)=>{
            //titles 
            const title = post.title;

            //imgs 
            const postImage = post.postImage;

            let img;

            if(postImage !== '{}' && postImage !== undefined && postImage.data !== undefined){
                const buf = Buffer(postImage.data);
                img = <img src={`data:image/png;base64,`+buf.toString('base64')} alt="thumbnail"/>
            }else{
                img = <img src={'imgs/post/undefined.jpg'} alt="thumbnail"/>
            }

            return (
                <div className="imgContainer" key={post._id}>
                    <div className="title">
                        {title}
                    </div>
                    <div className="imgBox">
                        {img}
                    </div>
                </div>
                )
        });

        return(
            <div className="dock">
                <div className="imgs">
                    {imgs}
                </div>
            </div>
        )
    }
}

export default Dock