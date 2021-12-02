import "./App.scss";
import TitmouseBeastKiss from "./images/TitmouseBeastKiss";

function App() {
  return (
    <div className="Frame">
      <div className="Gallery">
        {/* <header className="App-title">
        Kinky Towers is coming soon!
      </header> */}
        {/* <header className="App-header">
      </header> */}
        <div className="Side">Kinky Towers</div>
        <div className="TitMouseBeastKiss">
          {/* hi */}
          <TitmouseBeastKiss />
        </div>
        <div className="Side">Coming Soon</div>
      </div>
      <div className='Footer'><span>For more info contact <a href="mailto:desmond.blume@gmail.com">desmond.blume@gmail.com</a></span></div>
    </div>
  );
}

export default App;
