export function validator() {
  const { tabName, desc, activeTab } = this.state;
  if (tabName !== "" && desc !== "" && activeTab === "") {
    this.state.validated = true;
  } else {
    this.state.validated = false;
  }
}
export function handleChange(e) {
  const target = e.target;
  this.setState({
    [target.name]: target.value,
  });

  this.validator();
}

export function handleZoom(e) {
  this.setState((prevState) => {
    return { zoom: !prevState.zoom };
  });
  e.target.focus();
}
export function handleAdd() {
  this.validator();
  const { tabName, defaultImg, img, desc, contents } = this.state;

  const content = {
    tabName,
    img,
    desc,
  };
  contents.push(content);

  console.log(this.state);

  this.setState({
    tabName: "",
    img: defaultImg,
    desc: "",
    contents,
    validated: false,
    status: "success",
    statusMsg: "탭 추가 완료!",
  });
  setTimeout(() => {
    this.setState({
      status: "",
      statusMsg: "",
    });
  }, 1500);
  this.fileInput.value = "";
}

export function retrieveContent(e) {
  const { contents } = this.state;
  const index = e.target.dataset.key;
  const content = contents[index];
  const { img, desc } = content;

  if (
    this.tabNameBtn.classList[0] === "active" &&
    (this.state.tabName !== "" || this.state.desc !== "")
  ) {
    if (!confirm("작성한 내용이 사라집니다! 괜찮으세요?")) {
      return;
    }
  }

  this.setState({
    tabName: "",
    img,
    desc,
    activeTab: index,
    validated: false,
  });

  this.tabNameBtn.classList.remove("active");
  this.fileInput.disabled = true;
}

export function clearState() {
  const target = this.tabNameBtn;
  if (target.classList[0] === "active") {
    return;
  }
  target.classList.add("active");
  this.setState({
    tabName: "",
    img:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    desc: "",
    activeTab: "",
  });
  this.fileInput.value = "";
  this.fileInput.disabled = false;
}

export function imageRegister(e) {
  const target = e.target;
  console.log(target);
  console.log(target.files); //FileList 객체
  console.log(target.files[0]); // File 객체
  const file = target.files[0];

  const reader = new FileReader();

  reader.onload = (e) => {
    const imgDataUri = e.target.result;

    this.setState({
      img: imgDataUri,
    });
  };

  reader.readAsDataURL(file);
}

export function handleHover(e) {
  const msg = e.target.dataset.hover;
  const { status } = this.state;
  //status가 'success' 또는 'alert'가 아닐때에만 동작
  if (!(status === "success" || status === "alert")) {
    if (e.type === "mouseenter") {
      // when mouse enter
      this.setState({
        statusMsg: msg,
        status: "normal",
      });
    } else {
      // when mouse out
      this.setState({
        statusMsg: "",
        status: "",
      });
    }
  }
}

export async function handleSubmit(e) {
  e.preventDefault();
  console.log("submit!");
  const { title, contents, href } = this.state;
  console.log(`title: ${title}`);
  console.log(`contents: ${contents}`);
  console.log(contents.length);
  console.log(`href: ${href}`);
  console.log(this.state);

  // valiadte states -> title, contents
  // 둘중 하나라도 없다면
  if (title === "" || contents.length === 0) {
    // do nothing
    console.log("not validated");
    this.setState({
      statusMsg: "뭐하는 짓이에욧!",
      status: "alert",
    });
    setTimeout(() => {
      this.setState({
        statusMsg: "",
        status: "",
      });
    }, 2000);

    return;
  }

  const project = {
    title,
    contents,
    href,
  };

  // 요청 보내면서 제출버튼 disable
  const result = await fetch("/project/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  console.log(result);
  // 요청 받아왔으면 enable

  this.setState({
    status: "success",
    statusMsg: "제출 완료되었습니다!",
  });
  setTimeout(() => {
    this.setState({
      status: "",
      statusMsg: "",
    });
  }, 2500);
}
