import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

// import App from './App';
import Loader from './components/Loader'

const mainContainer = document.querySelector('main');

const App = Loadable({
    loader:()=> import('./App'),
    loading:Loader,
});
        
fetch('/diary/fetch')
.then((res)=>{
    console.log(res);
return res.json();
})
.then((data)=>{
    console.log(data);
    const posts = data;

    ReactDOM.render(<App posts={posts}/>,mainContainer);
})