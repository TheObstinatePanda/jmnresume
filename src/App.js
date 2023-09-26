import './App.css';
import Work from './workhistory/Work'
import Education from './education/education'
import Skills from './skillslist/skills'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jason Newman</h1>
        <h2>Front-End Developer</h2>
      </header>

      <main>
        <div id="intro" className="container" >
          <img src={require('./images/me.JPG')} id='profilepic' alt='Profile pic of Jason Newman'/>
          <p id="objective">To obtain a front end developer position where my creativity and problem-solving skills can be utilized to design user-friendly interfaces and drive business objectives.</p>
        </div>
        <nav>
          <ul>
            <li>Navigation1</li>
            <li>Navigation2</li>
            <li>Navigation3</li>
            <li>Navigation4</li>
            <li>Navigation5</li>
          </ul>
        </nav>
        <div id="body" className="container">
          <div id="leftBody" className="container">
            <Education/>
            <Skills/>
          </div>
          <div id="rightBody" className="container">
            <Work/>
          </div>
        </div>
      </main>
      <p>Hello world!</p>
    </div>
  );
}

export default App;
