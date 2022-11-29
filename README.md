# React+TypeScript 공부용 개인 프로젝트

🐶 기간 : 2022. 11. 23 ~

🐶 목적 : React 와 TypeScript 친해지기!

🐶 구현기능: Riot 전적검색 사이트

🐶 적용기술 : <img src="https://img.shields.io/badge/React-aqua?style=flat&logo=react&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/HTML-orange?style=flat&logo=HTML5&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/CSS-blue?style=flat&logo=CSS3&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/TypeScript-gray?style=flat&logo=TypeScript&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/BootStrap-purple?style=flat&logo=BootStrap&logoColor=white&magin-left=5px"/>

---

1. React + TypeScript 프로젝트 생성 및 개발환경 세팅(11/23)

   - vscode 설치 및 git-hub 연동
   - eslint prettier 적용
   - CRA를 통한 React 설치
   - React-Router 및 TypeSrcipt 적용

   ![reactintroduction](https://user-images.githubusercontent.com/98578138/203504109-96c10c69-3126-46a8-998f-345b3751ae43.png)
   ![image](https://user-images.githubusercontent.com/98578138/203504124-65805979-0dd0-40a5-8a58-1757801bbdb6.png)


2. Riot Games open api를 활용한 전적검색 구현 (11/28 ~ )
   - Riot Games 공식 api 중 소환사 전적검색 api 활용
   - 실제 내 아이디와 faker 선수 아이디를 검색했을 때 나오는 결과값 표출
   - 레이아웃은 추후 변경 예정
  

   ![2](https://user-images.githubusercontent.com/98578138/204480433-cf1267ff-ed14-48f4-9cc9-547b69268cc3.png)
   
   ![5](https://user-images.githubusercontent.com/98578138/204481292-06e36563-82a2-4861-9790-a9ad60642dac.png)


   - 위의 결과를 뽑을 때 하나의 api에서 호출하는 방식이 아닌, 호출한 api의 결과값을 통해 xml을 반환하는 또다른 api를 연계하여 아이콘과 유저정보를 뽑아낸다. 자세한 내용은 공식문서를 참조.
   1. DEVELOPER-APIS [https://developer.riotgames.com/] 
   2. DEVELOPER-DOCS [https://developer.riotgames.com/docs/portal]


3. POSTMAN 을 통한 API 리스트 준비 및 정렬

   ![3](https://user-images.githubusercontent.com/98578138/204481997-a73529c1-70c8-47a8-b683-fe61c61ce360.png)
   
   Postman을 활용하여 이번 프로젝트 넣을 api를 전부 호출하여 정리하였다. 
   
   1. 유저 input을 통해 소환사 정보를 조회한다.(유저 닉네임, 아이콘, LV, 티어, 랭킹, 최근 10게임 정보)
   2. 최근 10게임에 대한 상세 정보를 조회할 수 있다.(챔피언, 사용한 아이템, 가한 데미지, 받은 데미지) 
   3. 최상위 랭킹 유저 리스트를 확인할 수 있다.
   4. 해당 작업 완료 시 기능 추가 고려
