import React from 'react';
import ReactDOM from 'react-dom';

const dockContainer = document.querySelector('.dockContainer');
        
fetch('/diary/fetch')
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
    const posts = data;

    ReactDOM.render(<App posts={posts}/>,dockContainer);
})