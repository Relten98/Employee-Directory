// import react from "react";
// import empContainer from './components/empContainer';

// Out all important react components to build the application.
import MainContent from './components/MainContent';
import Wrapper from './components/Wrapper';
import Header from './components/Header';


import './index.css';

function App() {
  return (
    <div className="App">
        <Header />
   <Wrapper>
     <MainContent />
   </Wrapper>
    </div>
  );
}


export default App;
