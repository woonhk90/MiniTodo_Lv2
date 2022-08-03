# [기능]
<p style='align-center:center;'>
  <img src='https://user-images.githubusercontent.com/99179343/182545629-27f93bb4-ed48-4647-b2e6-48d767182853.gif')
</p>

# [Compononets]
```bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Form.js
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Layout.js
 ┃ ┣ 📜List.js
 ┃ ┣ 📜Pages.js
 ┃ ┣ 📜Todo.js
 ┃ ┗ 📜TodoDetail.js
 ┣ 📂pages
 ┃ ┗ 📜Work.js
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
# [컴포넌트 나눈 이유]
  우선 최대한 잘게 나눈다는 것을 우선적인 목표로 세웠습니다.
  
  Header 컴포넌트: 웹페이지의 이름등의 내용이 들어있기 때문에
  
  Form 컴포넌트: input의 글 작성 기능(제목, 내용), 글 등록하는 기능이 있기 때문에
   
  List 컴포넌트: todo 항목을 묶음으로 표현해야 하기 때문에
  
  Todo 컴포넌트: todo 항목의 내용을 작성해서 보여주기 위함
  
  TodoDetail 컴포넌트: 상세보기 버튼을 눌렀을 때 내용을 보여주기 위함
  
  Layout 컴포넌트: 하위 항목의 Header, Form, List를 묶어주기 위함
  
  Pages 컴포넌트: layout이 한 페이지임을 알려주기위해 만들었습니다.
  
