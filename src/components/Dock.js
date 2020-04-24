import React from 'react';

class Dock extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        const {posts}=this.props;
        
        const imgs = posts.map((post)=>{
            //titles 
            const title = post.title;

            //imgs 
            const img = post.postImage;

            let imgSrc = null;
            if(img !== '{}' && img !== undefined && img.data !== undefined){
                imgSrc = `data:image/png;base64,${img.data.toString('base64')}`;
            }else{
                imgSrc = 'imgs/post/undefined.jpg';
            }

            return (
                <div className="imgContainer">
                    <div className="title">
                        {title}
                    </div>
                    <div className="imgBox">
                        <img src={imgSrc} alt="thumbnail"/>
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