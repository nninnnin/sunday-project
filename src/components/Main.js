import React from 'react';
import '../styles/Main.css'

class Main extends React.Component{
    render(){
        return(
            <div className="Main">
                <h2 className="title">저스틴 블로그</h2>
                <div className="img-container">
                    <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" alt=""/>
                </div>
                <div className="desc">
                    Loti possimus iusto tempora perferendis officiis exercitationem soluta ipsam ab officia recusandae qui, ex voluptatum numquam blanditiis perspiciatis maiores!
                </div>
            </div>
        )
    }
}

export default Main