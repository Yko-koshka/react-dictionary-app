import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="logo-text">Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="sunrise" />
      </main>
    </div>
  );
}

export default App;
