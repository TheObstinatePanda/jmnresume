import './App.css';
import Work from './workhistory/Work'
import Education from './education/education'
import Skills from './skills/skillsList'

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="name">Jason Newman</h1>
        <h2 id="title">Front-End Developer</h2>
      </header>

      <main>
        <div id="intro" className="container" >
          <img src={require('./images/me.JPG')} id='profilepic' alt='Profile pic of Jason Newman'/>
          <div id="topinfo">
            <p id="objective">To obtain a front end developer position where my creativity and problem-solving skills can be utilized to design user-friendly interfaces and drive business objectives.</p>
            <nav>
              <ul>
                <li>Navigation1</li>
                <li>Navigation2</li>
                <li>Navigation3</li>
                <li>Navigation4</li>
                <li>Navigation5</li>
              </ul>
            </nav>
            </div>          
        </div>
       
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
    </div>
  );
}

export default App;
