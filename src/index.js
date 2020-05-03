import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

// import App from './App';
import Loader from './components/Loader'

const mainContainer = document.querySelector('main');
const slime = document.getElementById('slime-container');
const pf = document.getElementById('pf-container');
const trigger = document.getElementById('trigger');
trigger.addEventListener('click',openReactApp);

function openReactApp(e){
    e.target.disabled = true
    e.target.innerText = '불러오는중..';

    slime.style.display="block";
    pf.style.display="none";

    console.log('펫치');

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
}

const App = Loadable({
    loader:()=> import('./App'),
    loading:Loader,
});


        
