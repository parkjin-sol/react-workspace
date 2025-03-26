import './App.css';
import Footer from './components/Task/Footer.jsx';
import Header from './components/Task/Header.jsx';
import './components/Task/style.css'
import Container from './components/Task/Container.jsx';

/* import WhatIsReact from './components/Chapter/WhatIsReact';
import WhatIsJSX from './components/Chapter/WhatIsJSX'; */
/* import Chapter01 from './components/Chapter/Chapter01/Chapter01';
import Chapter02 from './components/Chapter/Chapter02/Chapter02'; */
/* import Chapter022 from './components/Chapter/Chapter02/Chapter02-2'; */


function App() {
  
  return  <> 
    { false && <WhatIsReact /> && <WhatIsJSX /> &&  <Chapter01  /> && <Chapter02/> && <Chapter022/>}
      <Header />

      <Container />

      <Footer />
    </>; 
}
 
export default App
