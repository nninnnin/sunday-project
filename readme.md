# Blog 만들기

배포완료! -> justindglee.com

## 사용된 기술스택

- HTML, CSS, VanilaJS, ejs, express, MongoDB

## 구조 설명

먼저 해당 프로젝트는 서버사이드 렌더링 (express, ejs)을 기초로 - project.ejs라는 하나의 템플릿 안에 부분적으로 리액트가 적용되어있습니다. 따라서 리액트가 모든 '클라이언트' 사이드를 대표한다고 말하기에는 애매한 부분이 있어서 폴더 구성도 client와 server로 나누지 않고 서버 + 리액트 라는 느낌으로 구성했습니다.

WDS도 클라이언트에서 따로 돌아가는 것이 아니라 익스프레스 서버에 WebpackDevMiddleware를 덧붙여서 작동됩니다. 그러니까 개발시에는 npm run dev 명령어로 서버만 켜주면 됩니다.

다만 이렇게되면 개발하며 서버사이드 코드에 수정사항이 있을 때마다 nodemon에 의해 restart가 일어나는데 그때마다 웹팩을 빌드하는 시간이 추가적으로 걸리기 때문에 dev-server라는 스크립트를 추가적으로 마련해놓고 WebpackDevMiddleware를 끌 수 있는 옵션을 마련하였습니다. 현재 서버사이드도 HMR을 적용할 수 있는 방법을 찾는 중이고 얼른 적용해서 이런 옵션이 필요 없게 만들 생각입니다..

처음으로 CRA없이 웹팩을 세팅하고 리액트 개발환경을 구성하면서 어려움이 많았는데 최종적으로 pro mern stack 의 도움을 많이 받은 것 같습니다. 결과적으로 클라이언트 사이드와 서버사이드 코드 분리에 대한 이해를 많이 넓힐 수 있었던 것 같습니다..

## 상세설명

- index 페이지
- visitor 페이지
  - vanilaJS (DOM 조작)
  - crud를 fetchAPI로 구현, 비동기 데이터 통신 및 ui 업데이트
  - lum 129를 기준으로 font color 자동변경
- project 페이지
  - React 적용
  - dock UI 적용 (맥의 그것)
- 공통
  - Loader UI 적용

## TO DO LIST

- production 환경 제대로 구축 (webpack, package script)
- webpack 및 nodemon 환경 설정 변수들 공부
- authentication 구현
  - admin login
