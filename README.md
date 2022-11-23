# React+TypeScript 공부용 개인 프로젝트


🐶 기간 : 2022. 11. 23 ~ 

🐶 목적 : React 와 TypeScript 친해지기!

🐶 구현기능: 미정

🐶 적용기술 : <img src="https://img.shields.io/badge/React-aqua?style=flat&logo=react&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/HTML-orange?style=flat&logo=HTML5&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/CSS-blue?style=flat&logo=CSS3&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/TypeScript-gray?style=flat&logo=TypeScript&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/BootStrap-purple?style=flat&logo=BootStrap&logoColor=white&magin-left=5px"/>

-------------------------------------


1. React + TypeScript 프로젝트 생성 및 개발환경 세팅(11/23)
   - vscode 설치 및 git-hub 연동
   - eslint prettier 적용
   - CRA를 통한 React 설치
   - React-Router 및 TypeSrcipt 적용
   
   ![reactintroduction](https://user-images.githubusercontent.com/98578138/203504109-96c10c69-3126-46a8-998f-345b3751ae43.png)
![image](https://user-images.githubusercontent.com/98578138/203504124-65805979-0dd0-40a5-8a58-1757801bbdb6.png)



2. React 환경에서 사용하는 TypeScript 문법 확인 (11/23)
   - 기본 문법 복습
   - 리액트에서 함수의 인자값으로 받는 데이터 형태 확인(typeof로 확인 했을 때 object로 나오지만 실제 사용할 때 any가 아닌 React.FormEvent<HTMLInputElement>를 적용)
   - event.target을 적용할 때 currentTarget 으로 변경되는 내용을 확인

  [적용코드]
  
![12](https://user-images.githubusercontent.com/98578138/203503804-5e5efb66-af70-4156-a9f3-d99392e388c2.png)


3. Login 페이지 구현 (11/23)
   - Bootstrap 웹 페이지 소스 적용 
   - user의 input 값을 참조하여 테스트 로그인 계정과 일치할 시 로그인 → 메인페이지 이동
   - Remember Password 체크박스 클릭 시 localdata 저장

![12321123](https://user-images.githubusercontent.com/98578138/203503745-16f9e624-b5bb-4aa6-99e9-a16eefdae12f.png)

