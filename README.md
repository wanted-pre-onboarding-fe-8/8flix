# Wanted Pre-Onboarding FE #1-2. 영화 정보 사이트🎬

## 목차

1. [프로젝트 소개](https://github.com/wanted-pre-onboarding-fe-8/8flix#1.-프로젝트-소개)
2. [역할](https://github.com/wanted-pre-onboarding-fe-8/8flix#2.-역할)
3. [프로젝트 요약](https://github.com/wanted-pre-onboarding-fe-8/8flix#3.-프로젝트-요약)
4. [폴더 구조](https://github.com/wanted-pre-onboarding-fe-8/8flix#3.-프로젝트-구조)
5. [구현](https://github.com/wanted-pre-onboarding-fe-8/8flix#4.-기능-구현-요구사항)
6. [프로젝트 설치 및 실행](https://github.com/wanted-pre-onboarding-fe-8/8flix#5.-프로젝트-설치-및-실행)
7. [회의록](https://github.com/wanted-pre-onboarding-fe-8/8flix#6.-회의록)

8. [프로젝트 결과물](https://github.com/wanted-pre-onboarding-fe-8/8flix#8.-프로젝트-결과물)

## 1. 프로젝트 소개

> 개요 : 원티드 프리온보딩 5기 1주차 두 번째 팀 과제
>
> 주제 : 2022 영화 정보 사이트
>
> 기간 : 2022.07.07 ~ 2022.07.13

## 2. 역할

|                   이름                    | 직책 | 역할                                                                                           |
| :---------------------------------------: | :--: | :--------------------------------------------------------------------------------------------- |
|    [이진희](https://github.com/bebusl)    | 팀장 | 📌 통신 모듈 리팩토링<br />📌 다크모드/라이트 모드<br />📌인피니트 스크롤 구현                 |
| [엄일경](https://github.com/sunaerocket)  | 팀원 | 📌 메인페이지<br />📌 전반적인 반응형 UI 레이아웃                                              |
| [임은지](https://github.com/salangdung-i) | 팀원 | 📌 검색 추천 기능 구현<br />📌검색창 UX 개선<br />📌 페이지 레이아웃 피그마 작업               |
|  [오태권](https://github.com/ohtaekwon)   | 팀원 | 📌 마이리스트 페이지<br />📌 영화 카태고리 분류                                                |
|  [추연빈](https://github.com/chuyeonbin)  | 팀원 | 📌 즐겨찾기 페이지 카드 UI 구현<br />📌 상세페이지 전반적인 UI 개선<br />📌 페이지 피그마 작업 |
| [문성운](https://github.com/corgi-world)  | 팀원 | 📌 Modal 기능 구현<br />📌 전역 상태 관리(Recoil) 로직 및 기능 구현<br />📌검색창 UX 개선      |

## 3. 프로젝트 요약

![https://img.shields.io/badge/Laguage-React-red](https://img.shields.io/badge/Laguage-React-green?logo=react&logoColor=#377549)

​ <img align="center" src="https://raw.githubusercontent.com/ohtaekwon/ohtaekwon/master/img/week_1_2.png" width="700" height="500" alt-text="Frontend Roadmap" >

- 웹 페이지
  - 메인 페이지에서 검색창에 검색을 통해 영화 데이터 출력 기능 기획
  - 즐겨찾기 페이지에 사용자가 즐겨찾기한 데이터 출력 기능 기획
  - 영화 데이터 클릭시 상세 페이지 출력 기능 기획
  - 모바일 사용자 대응을 위한 반응형 레이아웃 기획
  - 사용자가 보기 편안한 색의 속성을 고려하여 어두운 계열의 색상 UI기획
    - 선택에 따른 `Dark / Bright` 모드 기능
  - 카테고리 버튼을 통해 영화 데이터 출력 기능 기획
- 검색
  - 키워드 검색을 통해, 추천 영화 리스트 출력 기능 기획
  - 검색창에 키워드를 통해 영화 데이터 출력 기능 기획

## 4. 프로젝트 구조

```bash
📁 public
└── images
│ 	  └──Logo.png
├── favicon.ico
├── 📁 src
│   ├── 📁 components
│   │     ├── AutoComplete.jsx
│   │     ├── Card.jsx
│   │     ├── GNB.jsx
│   │     └── Modal.jsx
│   ├── 📁 database
│   │     └── database.json
│   ├── 📁 hooks
│   │     └── useInfiniteScroll.js
│   ├── 📁 http
│	│	  ├── httpRequest.js
│   │     └── useRequest.js
│   ├── 📁 models
│   │     └── useMovie.js
│   ├── 📁 pages
│   │     ├── 📁 detail
│   │     │	    └── index.jsx
│   │     └── 📁 main
│   │     │	    └── index.jsx
│   │     └── 📁 myList
│   │		    ├── index.jsx
│   │		    └── MyListCard.jsx
│   ├── 📁 service
│   │     └── movieService.js
│   ├── 📁 utils
│   │    ├── constants
│   │    │    ├── index.js
│	│    │    ├── request.js
│   │    │    └── index.js
│   │    └── helpers
│   │         └── index.js
├── GlobalStyles.js
├── App.js
├── index.html
├── recoil.js
└── Router.jsx
```

## 5. 기능 구현

### 검색

- [x] 영화를 검색을 위한 `검색 입력 input` , `검색 button` 검색하는 컴포넌트 구현
- [x] 상단의 검색창에 검색 키워드를 입력을 하면 추천 목록 영화들 출력 구현
  - [x] Recoil의 전역 상태관리를 통해서, Key값에 따른, 결과를 Selector로 상태 가공 처리
- [x] 검색 결과 없을 시에 `“검색 결과가 없습니다” `표시
- [x] 검색어를 입력 후 검색을 클릭하면, 해당 영화 데이터 출력 구현
  - [x] `mouseDown` 으로 사용자가 해당 element를 눌렀을 떄. 해당 keyword의 영화 데이터가 전역 상태 관리에 반영

### 메인 페이지

- [x] 검색창에 검색 후 키워드에 맞는 영화 데이터 목록이 출력되도록 구현
- [x] 반응형 페이지 구현
  - [x] 모바일에도 대응할 수 있도록 `media query` 처리
- [x] 화면을 내려갈 수록 추가된 영화 데이터 출력하는 `infinity scorll` 기능 구현
- [x] 해당 영화 데이터를 클릭하면 상세페이지(`Modal`)출력 구현
- [x] 영화의 페이지에 즐겨찾기 버튼을 누르면 즐겨찾기 추가 기능 구현
  - [x] 즐겨찾기 버튼을 누르면, 전역 상태 관리로 selector 가공 처리

### 즐겨찾기 페이지

- [x] 오른쪽 상단의 `즐겨찾기` 탭 버튼을 누르면 즐겨찾기 페이지로 이동 구현
- [x] 즐겨찾기 페이지로 버튼을 누른 즐겨찾기된 영화 데이터가 출력 구현
- [x] 카테고리 버튼을 클릭하면 추가한 즐겨찾기 목록에서 오름차순 정렬 구현
- [x] 즐겨찾기 페이지의 영화 데이터의 `🔽` 버튼을 누르면, 해당 영화 데이터 상세페이지(modal) 출력 구현
- [x] 즐겨찾기 페이지의 영화 데이터의 ` ⭐` 버튼을 누르면, 즐겨찾기 취소 구현

### 통신 모듈 개선

- [x] 기존의 class형 HTTP통신 모듈에서 함수형 패칭 모듈로 로직 개선

## 6. 프로젝트 설치 및 실행

- Git Clone

```
$ git clone
```

- 프로젝트 실행

```
$ npm install
$ npm run start
```

## 7. 회의록

- [1일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=c1a46a3b94eb4f449c8874f9e6b5318d&p=1d0271c19cd341c79222ee33af45e0b8)

- [2일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=c1a46a3b94eb4f449c8874f9e6b5318d&p=5c72054b2c194f388ceff676a4583f12)

- [5일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=c1a46a3b94eb4f449c8874f9e6b5318d&p=a6a98833708a477188bc97cb40b8e358)

- [6일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=c1a46a3b94eb4f449c8874f9e6b5318d&p=e9a1c1787dee4737af18baa49d1f7dd0)

- [7일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=c1a46a3b94eb4f449c8874f9e6b5318d&p=4c43174664584dada9ff4b418f034c20)

## 8. 프로젝트 결과물

### 🎬 메인 페이지

![main](https://raw.githubusercontent.com/ohtaekwon/ohtaekwon/master/img/Week1_2/mainpage.png)

## 💞 즐겨찾기 페이지

![mylist](https://raw.githubusercontent.com/ohtaekwon/ohtaekwon/master/img/Week1_2/mainpage.png)

## 👍검색을 통한 영화 추천 기능

![search](https://raw.githubusercontent.com/ohtaekwon/ohtaekwon/master/img/Week1_2/search.gif)

## 🔎 상세 페이지

![detail](https://raw.githubusercontent.com/ohtaekwon/ohtaekwon/master/img/Week1_2/detail.png)
