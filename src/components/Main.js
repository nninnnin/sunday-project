import React from 'react';
import '../styles/Main.css'

class Main extends React.Component{
    render(){
        return(
            <div className="Container">
                <div className="Preview">
                    <div className="frame-container">
                        <iframe src="http://justindglee.com" scrolling="no" frameBorder="0"></iframe>
                    </div>
                </div>
                <div className="Main">
                    <h2 className="title">저스틴 블로그</h2>
                    <div className="img-container">
                        <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" alt=""/>
                    </div>
                    <div className="content">
                        <div className="tab">
                            <button>설명</button>
                            <button>스택</button>
                            <button>ㅇㅅㅇ;</button>
                        </div>
                        <div className="desc">
                            개인 홈페이지로 사용하기 위해 만든 프로젝트인 만큼 개인적으로 좋아하는 도트 디자인이나 재미있는 UI 요소들을 넣으면서도 가독성이 좋은(?) 깔끔한 디자인을 함께 접목시켜보려고 노력해 보았습니다 :) 각 페이지마다 다른 방식으로 기술 스택이 적용되는 것이 특징입니다.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main