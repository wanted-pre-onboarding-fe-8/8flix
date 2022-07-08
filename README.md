# 원티드 프리온보딩 프론트엔드 1주차 과제 2 - 영화 정보 사이트

## 동작

## 역할

|  이름  |            역할             |
| :----: | :-------------------------: |
| 엄일경 |    메인페이지, 검색기능     |
| 임은지 |       검색 추천 기능        |
| 이진희 |  GNB, 검색 전역 상태 관리   |
| 오태권 |      마이리스트페이지       |
| 문성운 | 상세페이지(Modal) 기능 구현 |
| 추연빈 |   즐겨찾기 페이지 카드 UI   |

## 폴더 구조

```bash
├── src
│   ├── components
│   │     ├── Card.jsx
│   │     ├── GNB.jsx
│   │     └── Modal.jsx
│   ├── database
│   │     └── database.json
│   ├── hooks
│   │     └── useInterceptionObserver.js
│   ├── pages
│   │     ├── detail
│   │     │    └── index.jsx
│   │     └── main
│   │     │    └── index.jsx
│   │     └── myList
│   │          ├── index.jsx
│   │          └── MyListCard.jsx
│   ├── service
│   │     └── movieService.js
│   ├── utils
│   │    ├── constants
│   │    │    └── theme.js
│   │    └── helpers
│   │         └── index.js
├── GlobalStyles.js
├── App.js
├── index.html
├── recoil.js
└── Router.jsx

```

## 구현

### 검색

- [x] Global 네비게이션 바로 검색창 기능 구현

### 영화 선택

- [x] 첫 화면에 영화 데이터 출력 구현
- [x] 검색창에 검색해서 검색한 키워드에 맞는 영화를 출력 구현
- [x] 해당 영화 데이터를 클릭하면 상세페이지(Modal)기능 구현
- [x] 영화의 페이지에 즐겨찾기 버튼 (🤍)를 누르면 💖로 변화 구현

### 즐겨찾기

- [x] 즐겨찾기 탭을 누르면 즐겨찾기 페이지로 이동 구현
- [x] 즐겨찾기 페이지로 버튼을 누른 즐겨찾기된 영화 데이터가 출력 구현

## 회의록

- [4일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=c1a46a3b94eb4f449c8874f9e6b5318d&p=1d0271c19cd341c79222ee33af45e0b8)
- [5일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=c1a46a3b94eb4f449c8874f9e6b5318d&p=5c72054b2c194f388ceff676a4583f12)
