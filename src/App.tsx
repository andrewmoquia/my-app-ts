import logo from "./logo.svg";
import "./App.scss";

function App() {

  function sum(a: number, b: number): number {
    return a + b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{sum(1, 10)}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
