// textarea에서 Enter 키를 누를 때 Form을 제출하도록
const postTextArea = document.querySelector('#postTxt');
postTextArea.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        const postForm = document.querySelector('#postForm');
        postForm.submit();
    }
})

// HTTP request with PUT method using fetchAPI to update the post
const updateBtn = document.querySelectorAll('#updateBtn');
updateBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();

        const fetchingAndUpdate = ()=>{
            const reqdata = {
                content: input
            }
            const url = e.target.parentElement.href;
    
            const postId = url.split('/')[4]
    
            fetch(`/visitor/${postId}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(reqdata)
            }).then((res)=>{
                console.log(`유저를 찾고 업데이트에 성공했습니다 status code = ${res.status}`);
                const date = new Date()
                const updateHTML = 
                    `${reqdata.content}
                    <br>
                    <span class="published">updated at ${date.toLocaleString('ko-KR')}</span>`
                e.target.parentElement.parentElement.children[1].innerHTML = updateHTML;
            }).catch((err)=>{
                console.log(err);
            })
        }

        const input = prompt('수정합시다');
        
        if (input !== null){
            fetchingAndUpdate();
        }
    })
});