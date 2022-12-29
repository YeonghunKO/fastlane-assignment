# 패스트레인 프론트엔드 직군 사전과제

# 🧐 프로젝트 간략 소개

> **facebook 깃허브의 create-react-app 레포지토리([링크](https://github.com/facebook/create-react-app/issues)) issue를 한 곳에 보기 쉽게 정리해놓은 앱.**
>
> 프로젝트 기간
> : 2022년 12월 26일 ~ 2022년 12월 28일
>
> 사전과제 상세 정보: [링크](https://yeoshinticket.notion.site/bdedb74d8dd74db889a5e78bfd6ac0f7)를 참고해주세요😋

# 🚀 배포

- [앱 배포링크](https://fastlane-assignment.vercel.app/)
- [스토리북 배포 링크](https://63ac29c8d5644beaaf2c3164-hmvdkmnasg.chromatic.com/)

# 🦾기능

1. 무한 스크롤이 가능합니다
   - Issue를 클릭하면 실제 해당 issue 페이지로 이동합니다.
   - create-react-app의 issue가 너무 많아서 6페이지까지만 api 요청이 되도록 코드를 짰습니다.
     - _useInfiniteQueryScoll의 `MAX_PAGE`를 수정하시면 됩니다._
     - https://github.com/YeonghunKO/fastlane-assignment/blob/8b32b4fd0dcc9b18c19f7c036eccb7b8b54c5eb4/hooks/useInfiniteQueryScroll.ts#L7-L17
2. 다크모드와 위로가기 버튼을 구현했습니다.
3. 반응형으로 만들었습니다.

## 🔨 사용 기술

<img alt="next.js" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white"/>

![](https://img.shields.io/badge/axios-551a8b?style=flat-square&logo=axios&logoColor=white)

![](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=React%20Query&logoColor=white) ![](https://img.shields.io/badge/Jotai-FAFAFA?style=flat&logo=Jotai&logoColor=white)

<img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> <img alt="styled-components" src ="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=white"/>

</br>

# 👁‍데모

|                                                      무한스크롤                                                      |                                                     다크모드/위로가기 버튼                                                      |                                                      반응형                                                      |
| :------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![무한스크롤](https://user-images.githubusercontent.com/65995664/209796325-701061a2-e7ae-4d48-a6c0-29f147aa06b8.gif) | ![다크모드위로가기 버튼](https://user-images.githubusercontent.com/65995664/209796903-42757fe7-1dbd-4e7f-ba55-d99273b71cfe.gif) | ![반응형](https://user-images.githubusercontent.com/65995664/209797274-58413325-15d5-4f4c-99dd-1d2626370995.gif) |

</br>

# ⌨️ 로컬에서 실행 방법

1. github access token을 만듭니다. [github access token 만들기방법](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token)

2. 루트 폴더에 `.env.local`파일을 만들고 아래와 같이 입력합니다

```bash
NEXT_PUBLIC_GITHUB_TOKEN={여기에 github access token을 입력하시면 됩니다}
```

3. 아래의 명령어를 입력하여 프로젝트를 다운받고 로컬 서버를 실행시킵니다.

```zsh
$ git clone https://github.com/YeonghunKO/fastlane-assignment.git
$ npm install
$ npm run dev
```

</br>

# 🏗 폴더 구조

<img width="176" alt="image" src="https://user-images.githubusercontent.com/65995664/209798734-ae9f5733-c05a-468f-9d27-6bb448e73bcf.png">

# ☑️ 과제 리뷰 포인트

## 📖 목차

- [atomic design을 적용](#1-atomic-design을-적용)
- [storybook을 사용](#2-storybook을-사용)
- [초기 데이터를 dehydrated함](#3-초기-데이터를-dehydrated함)
- [무한스크롤 구현](#4-react-query--intersection-oberserver를-이용해-무한스크롤-구현)
- [OOP](#5--api관련-함수에-oop를-적용)
- [error처리](#6-error처리)
- [다크모드](#7-다크모드)
- [Issue 컴포넌트 리랜더링 최소화](#8-issue-컴포넌트-리랜더링-최소화)
- [type 파일에 대하여](#9-type-파일에-대하여)
- [일기를 썼다.](#10-일기를-썼다)

### 1. atomic design을 적용

: brad frost의 atomic design을 적용했습니다.
`components` 폴더를 보시면 잘 아실 수 있으실 겁니다. 다만 `components` 폴더를 atom/molecules/organisms/template/page 나누면 atom 폴더에 지나치게 많은 파일이 생겨날 수 있기 때문에 페이지 별로 다시 components를 정리하였습니다.

예를 들어, `Issue` 컴포넌트 같은 경우는 `IssueList`페이지에서만 사용되기 때문에 `components/IssueList` 안에 위치해있습니다.
페이지를 가리지 않고 이곳저곳에서 쓰이는 컴포넌트는 `components/common`에 보관해두었습니다. `components/particles` 폴더같은 경우, 컴포넌트는 아니지만 컴포넌트의 전역 상태관리를 담당하는 함수를 보관합니다.

### 2. storybook을 사용

: atomic design과 최고의 궁합을 자랑하는 tool입니다. atomic하게 분리된 컴포넌트를 시각적으로 표시해주고 간단한 테스트까지 진행할 수 있습니다. [👉스토리북 보러가기](https://63ac29c8d5644beaaf2c3164-hmvdkmnasg.chromatic.com/)

### 3. 초기 데이터를 dehydrated함

: 서버에서 페이지를 만드는 시점에서 미리 데이터를 받아올 수 있도록 하였습니다. 바싹 말린 데이터를 html 문서에 포함시킨후 클라이언트에 도착하는 순간 hydrate하여 바로 사용할 수 있도록 하였습니다. 이로서, 클라이언트에서 컴포넌트가 마운팅 될때 굳이 데이터를 받아 랜더링할 필요가 없어졌습니다. 즉, 깜빡이는 증상없이 바로 초기 데이터가 화면에 표시됩니다.

https://github.com/YeonghunKO/fastlane-assignment/blob/8b32b4fd0dcc9b18c19f7c036eccb7b8b54c5eb4/pages/index.tsx#L20-L36

### 4. react-query + intersection oberserver를 이용해 무한스크롤 구현

:react-query의 `useInfiniteQuery`와 `react-intersection-observer`를 이용하여 무한스크롤을 구현하였습니다. intersection observer는 scroll이벤트와는 달리 targeting한 영역이 화면에 들어올때만 함수가 호출되기 때문에 성능을 많이 잡아먹지 않습니다.

useInfiniteQuery는 무한 스크롤로 불러온 데이터가 stale한 상태일 경우 다시 서버로 부터 불러오기 때문에 서버상태와 싱크를 유지합니다. ([공식문서](https://tanstack.com/query/v4/docs/react/guides/infinite-queries#what-happens-when-an-infinite-query-needs-to-be-refetched))

또한, `initalData` 옵션을 통해 hydrate된 초기 issues데이터를 pass시켜 깜빡임 현상을 방지하였습니다.

### 5. API관련 함수에 OOP를 적용

:api 클래스에 다른 메소드가 추가될 가능성이 높아보입니다. (ex> filterIssuesById). 그래서 확장성과 유지보수를 용이하게 하기위해 OOP를 적용하여 API 클래스를 만들어 보았습니다.
https://github.com/YeonghunKO/fastlane-assignment/blob/8b32b4fd0dcc9b18c19f7c036eccb7b8b54c5eb4/NetWork/gitHubIssueService.ts#L1-L37

### 6. error처리

: `IssueList`안에서 issues를 api로 불러올때 에러가 생길 경우 Modal에 에러 메세지를 표시하도록 해주었습니다.
https://github.com/YeonghunKO/fastlane-assignment/blob/8b32b4fd0dcc9b18c19f7c036eccb7b8b54c5eb4/components/IssueList/Page/IssueList.tsx#L17-L29

### 7. 다크모드

: 요구사항에는 없었지만 앱을 계속 보다보니 눈이 부셔서 구현해보았습니다. 라이브러리를 사용하지 않고 한 땀 한 땀 구현하였습니다.
https://github.com/YeonghunKO/fastlane-assignment/blob/main/components/common/Molecules/LightDarkModeSwitch/LightDarkModeSwitch.styles.ts

jotai를 이용하여 토글될때마다 ThemeProvider에 들어가는 theme을 mode에 따라 dynamic하게 pass해주었습니다.
https://github.com/YeonghunKO/fastlane-assignment/blob/8b32b4fd0dcc9b18c19f7c036eccb7b8b54c5eb4/pages/_app.tsx#L21-L27

### 8. Issue 컴포넌트 리랜더링 최소화

: React.memo를 사용하여 Issue컴포넌트의 리랜더링을 방지하였습니다. Issue 컴포넌트는 가장 많이 랜더링 되고 가장 자주 바뀌는 컴포넌트이기에 리랜더링 방지가 필수라고 생각했습니다.

### 9. type 파일에 대하여

: 각 컴포넌트에 쓰이는 type은 컴포넌트 폴더안에 같이 두었습니다. 단 , 이곳저곳에서 자주 쓰이는 type같은 경우(ex> type/issue.ts) `/type` 폴더에 저장하였습니다.

### 10. 일기를 썼다.

: `/오늘의 일기📖` 폴더에 일기를 썼습니다. 개발하면서 가장 중요한것중에 하나가 동료와의 작업상태, 생각의 싱크를 맞추는 일입니다. 그래서 주변 동료들에게 나의 상태를 최대한 잘 알 수 있게 한다는 마음으로 매일 매일 일기를 썼습니다 . 일기내용은 아래처럼 구성됩니다.

```js
# 오늘 한 일

# 아쉽거나 어려웠던 점

# 잘했거나 배웠던 점

# 내일 할 일

# 총평

```

# 🗝 커밋 컨벤션

| 커밋제목 | 커밋내용                    |
| -------- | --------------------------- |
| feat     | 새로운 기능 추가            |
| style    | 스타일 수정                 |
| chore    | 라이브러리 설치, 환경설정   |
| fix      | 버그 수정                   |
| docs     | 문서작성                    |
| refactor | 코드 리팩토링               |
| hotfix   | 치명적이거나 급한 버그 수정 |

# 🤔회고

: 맞닥뜨린에러나 총평을 적어보았습니다.
[회고 글 보러가기](https://velog.io/@yhko1992/fastlane-%EA%B8%B0%EC%97%85%EA%B3%BC%EC%A0%9C%EA%B9%83%ED%97%99-%EC%9D%B4%EC%8A%88-%EC%B6%94%EC%B6%9C)
