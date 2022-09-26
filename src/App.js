import Masthead from './component/Masthead';
import AboutMe from './component/AboutMe';
import Education from './component/Education';
import Skills from './component/Skills';
import Experiences from './component/Experiences';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>JK JU's Portfolio</p>
      </header>
      <Masthead />
      <AboutMe />
      <Education />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;
