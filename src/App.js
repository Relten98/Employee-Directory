import react from "react";
// import empContainer from './components/empContainer';
import './index.css';

function App() {
  return (
    <div className="App">
           <Title>Employee Directory</Title>
      <wrapper>
        {/* Spaces for when I want extra content  */}
        <empContainer />
      </wrapper>
    </div>
  );
}

export default App;
