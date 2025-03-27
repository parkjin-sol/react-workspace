import { Routes, Route} from "react-router-dom";
import './App.css';
import Footer from './components/Task/Footer';
import Header from './components/Task/Header';
import './components/Task/style.css'
import Container from './components/Task/Container.jsx';

import WhatIsReact from './components/Chapter/WhatIsReact';
import WhatIsJSX from './components/Chapter/WhatIsJSX';
import Chapter01 from './components/Chapter/Chapter01/Chapter01';
import Chapter02 from './components/Chapter/Chapter02/Chapter02';
import Chapter03 from "./components/Chapter/Chapter03/Chapter03.jsx";
import Chapter03Input from "./components/Chapter/Chapter03/Chapter03Input.jsx";
import Chapter03B from "./components/Chapter/Chapter03/Chapter03B.jsx";
import Memo from "./components/Chapter/Memo/Memo.jsx";
import Foods from "./components/Busan/Foods.jsx";
import FoodsDetail from "./components/Busan/FoodsDetail.jsx";

/* import Chapter022 from './components/Chapter/Chapter02/Chapter02-2'; */

/*
  URL을 이용해서 
  url이 /chap01일 경우 Chapter01 컴포넌트를 보여주고
       / chap02일 경우 Chapter02 컴포넌트를 보여주고 
       / 일 경우 메인화면을 보여주기 

  터미널 : npm install react-router-dom
*/

function App() {
  
  return  <> 
    { false &&  <WhatIsJSX /> &&  <Chapter01  /> && <Chapter02/> && <Chapter022/>}
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={ <WhatIsReact />}/>
          <Route path="/chap01" element={ <Chapter01  />} />
          <Route path="/chap02" element= { <Chapter02 />} />
          <Route path="/chap03" element= { <Chapter03/>} />
          <Route path="/input" element= { <Chapter03Input/>} />
          <Route path="/memo" element={<Memo/>} />
          <Route path="/minus" element= { <Chapter03B/>} />
          <Route path="/foods" element= { <Foods/>} />
          <Route path="/foods/:id" element = { <FoodsDetail/> } />
          <Route path="/*" element={<h1>존재하지않는 페이지 요청입니다.</h1>} />
        </Routes>
      </div>
      <Footer />
    </>; 
}
 
export default App
