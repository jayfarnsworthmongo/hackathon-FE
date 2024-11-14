import logo from './logo.svg';
import './App.css';
//import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe 
        style={{background: "#F1F5F4", border: "none", "borderRadius": "2px", "box-shadow": "0 2px 10px 0 rgba(70, 76, 79, .2)", width: "100vw", "height": "100vh"}}
        src="https://charts.mongodb.com/charts-sa-hackathon-fy25q4-remot-zjbxnim/embed/dashboards?id=b2cb3ae1-e9ea-4e93-a243-26d518a99b0d&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>      </header>
    </div>
  );
}

export default App;
