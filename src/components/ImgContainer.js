import React from 'react';

class ImgContainer extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        console.log('clicked!');
        console.log(this);
        // 해당하는 데이터를 다른 컴포넌트로 보내려면?
    }

    render(){
        const {posts} = this.posts;

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
                    <div className="imgBox" onClick={this.handleClick.bind(this)}>
                        <img src={imgSrc} alt="thumbnail"/>
                    </div>
                </div>
            )
        })

        return imgs;
    }
}
