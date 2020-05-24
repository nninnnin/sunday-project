// 페이지별 footer 위치선정
if (document.querySelector("footer").offsetTop < window.innerHeight) {
  document.querySelector("footer").style.position = "absolute";
}

// navigation link 누르면 fade out
const nav_items = Array.from(document.querySelector("nav").children);
nav_items.forEach((nav_item) => {
  nav_item.addEventListener("click", (e) => {
    document.body.classList.add("fade-out");
  });
});

const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const nav = document.querySelector("nav");
if (menu !== null) {
  menu.addEventListener("click", (e) => {
    nav.classList.toggle("appear");
    logo.classList.toggle("disappear");
  });
}

// 480px 이하 + 다운스크롤에서 네브바(.logo) fixed position으로
function fixedNav() {
  const navbar = document.getElementById("logobar");
  const popup = document.getElementById("pop-up");
  const main = document.querySelector("main");
  if (
    window.innerWidth <= 480 &&
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  ) {
    navbar.classList.add("sticky");
    popup.classList.add("sticky-popup");
    main.classList.add("sticky-padding");
  } else {
    navbar.classList.remove("sticky");
    popup.classList.remove("sticky-popup");
    main.classList.remove("sticky-padding");
  }
} // 4-29일 현재 사용 X

// 인덱스 빼고 home버튼 기능~
if (location.pathname !== "/") {
  const homeBtn = document.getElementById("home");

  if (homeBtn !== null) {
    // show up the homeBtn
    function popUpHomeBtn() {
      if (
        window.innerWidth <= 480 &&
        (document.body.scrollTop > 250 ||
          document.documentElement.scrollTop > 250)
      ) {
        homeBtn.classList.add("appear");
      } else {
        homeBtn.classList.remove("appear");
      }
    }
    homeBtn.addEventListener("click", () => {
      console.log("clicked!");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    window.onscroll = () => {
      popUpHomeBtn();
    };
  }
}

// Get a picture from instagram
// Server side rendering으로 바꾸는 게 나을듯(사용자 경험상), ejs template에서 미리 만들어서 클라이언트로 보낼 수 있게 refactoring 할 것
// async function getPicture(imgId) {
//   const res = await fetch(`https://www.instagram.com/p/${imgId}/media`);
//   console.log(res);
//   const data = await res.blob();
//   console.log(data);

//   //const insta = document.getElementById('instagram-embed');
//   //insta.innerHTML = data.html;
//   const img1 = document.getElementById("img1");

//   const objectURL = URL.createObjectURL(data);
//   img1.src = objectURL;
// }

/* 페이지에 따라 다른 instagram picture fetching */
// if (
//   window.location.pathname === "/index.html" ||
//   window.location.pathname === "/"
// ) {
//   const imgId = "B8tCX49plkG";
//   getPicture(imgId);
// }

// // The debounce function receives our function as a parameter
const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });
  };
};

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener("scroll", debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();
