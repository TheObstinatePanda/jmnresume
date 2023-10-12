import './App.css';
import Navigation from './navigation/navigation'
import Work from './workhistory/Work'
import Education from './education/education'
import Skills from './skills/skills'

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
          <div id="textnav">
            <p id="objective">To obtain a front end developer position where my creativity and problem-solving skills can be utilized to design user-friendly interfaces and drive business objectives.</p>
            <div id="buttons">
              <Navigation />
            </div>
          </div>
        </div>
        
        <div id="body" className="container">
          <div id="leftBody" className="container">
            <h3 className="h3Left">CONTACT</h3>
            <a href="https://www.linkedin.com/in/jason-newman-982441179/" className="contact">
              <img src={require('./images/linkedin_3536505.png')} id='linkedin' alt="LinkedIn's logo"/>
              <p>LinkedIn</p>
            </a>
            <p id="contactP">Please contact me through LinkedIn!</p>
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
