// 최상단 비공개글을 제외한 5개 글의 id에 순차적으로 index 부여 (1,2,3,4,5)
const posts = document.querySelectorAll(".guestPost");
for (let i = 0; i < 5; i++) {
  posts[i].id = i;
}

// textarea에서 Enter 키를 누를 때 Form을 제출하도록
const postTextArea = document.querySelector("#postTxt");
postTextArea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // 하면 깔끔
    const postForm = document.querySelector("#postForm");
    // postForm.submit();
    sendForm(e, postForm);
  }
});

// send form data with FetchAPI (비동기 create post)
function sendForm(e, form) {
  e.preventDefault();

  // 먼저 FormData 객체를 새로 만들어 form data 담아주기
  const formData = new FormData(form);
  console.log(formData);

  const data = {};

  for (var [key, value] of formData.entries()) {
    console.log(key, value);
    data[key] = value;
  }

  // 이젠 textarea를 비워줘도 괜찮다
  const textarea = document.getElementById("postTxt");
  console.log(textarea);
  textarea.value = "";

  // 만든 데이터를 post method로 fetch!
  fetch("/visitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json(); // 리턴...^^..
    })
    .then((data) => {
      console.log(data);
      const date = new Date().toLocaleString("ko-KR", { timeZone: "UTC" });
      // ui update
      const guestPosts = document.getElementById("guestPosts");
      guestPosts.insertAdjacentHTML(
        "afterbegin",
        `<div class="guestPost ${
          data.font_white ? "white" : ""
        }" style="background-color:${data.bg_color}">
        <header>
            NO.${guestPosts.childElementCount + 1}
            <span>작성자</span>
            <span class="published">${
              data.updated ? "updated" : "posted"
            } at ${date}</span>
            ${data.hidden ? `<span>비밀글</span>` : ""}
            <div class="checkbox">
                <label for="hidden">${
                  data.hidden ? `공개하기` : `숨기기`
                }</label>
                <input type="checkbox" name="hidden" value="${
                  data.hidden ? false : true
                }" onclick="toggleHidden(this)" data-post-id="${data._id}">
            </div>
        </header>

        <p class="${data.hidden ? "hiddenPost" : ""}">
            ${data.content}
            <br>
        </p>
        </div>`
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

// HTTP request with PUT method using fetchAPI to update the post
const updateBtns = document.querySelectorAll("#updateBtn");
updateBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const fetchingAndUpdate = () => {
      const reqdata = {
        content: input,
      };
      const url = e.target.parentElement.href;

      const postId = url.split("/")[4];

      fetch(`/visitor/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqdata),
      })
        .then((res) => {
          console.log("res는", res);
          console.log(
            `유저를 찾고 업데이트에 성공했습니다 status code = ${res.status}`
          );
          const date = new Date();
          const updatedContent = reqdata.content;
          const updated_at = `<span class="published">updated at ${date.toLocaleString(
            "ko-KR"
          )}</span>`;

          e.target.parentElement.parentElement.children[1].innerHTML = updatedContent;
          e.target.parentElement.parentElement.children[0].children[1].innerHTML = updated_at;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const input = prompt("수정합시다");

    if (input !== null) {
      fetchingAndUpdate();
    }
  });
});

// delete method!
const deleteBtns = document.querySelectorAll("#deleteBtn");
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const url = e.target.parentElement.href;
    const postId = url.split("/")[4];

    fetch(`visitor/${postId}/delete`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        console.log(res.status, res.statusText);
        const postDiv = e.target.parentElement.parentElement;
        // fadeOut(postDiv,400); // 넘느려서..
        postDiv.style.display = "none";
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// delete dom smoothly

let opacity = 1;

// 없어지는 형태? 가 마음에 안든다.
function fadeOut(elm, ms) {
  let opacity = 1;

  const timer = setInterval(() => {
    opacity -= 50 / ms;

    if (opacity <= 0) {
      clearInterval(timer);
      elm.style.display = "none";
      elm.style.visibility = "hidden";
    }

    elm.style.opacity = opacity;
  }, 50);
}

// 비밀글 / 공개글 toggle

function toggleHidden(elm) {
  let makeHidden = elm.value;
  console.log(makeHidden);
  const postId = elm.dataset.postId;
  console.log(postId);

  if (makeHidden == "false") {
    // 공개하기
    console.log("공개하기!");
    console.log(makeHidden);

    let data = {
      hidden: makeHidden,
    };

    fetch(`/visitor/${postId}/hide`, {
      method: "put",
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        console.log(res.status);
        if ((res.status = 200)) {
          console.log(this);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    // 공개하기
    console.log("숨기기!");
    console.log(makeHidden);

    let data = {
      hidden: makeHidden,
    };

    fetch(`/visitor/${postId}/hide`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        console.log(res.status);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
