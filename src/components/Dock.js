import React from 'react';
import '../styles/Dock.css';


class Dock extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){ // 왜안대지??
        console.log('dock comp did mount!')
        const dock = document.querySelector('.dock');
        const imgs = document.querySelector('.imgs');

        console.log(dock, imgs);

        // 가로스크롤
        if(dock !== null){
            dock.addEventListener('wheel', function(e) {
                e.preventDefault();
                if (e.deltaY > 0) imgs.scrollLeft += 50;
                else imgs.scrollLeft -= 50;
            });
        }
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