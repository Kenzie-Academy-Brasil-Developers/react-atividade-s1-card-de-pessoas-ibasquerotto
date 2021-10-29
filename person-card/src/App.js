import logo from "./logo.svg";
import "./App.css";

import Developer from "./components/developers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Developer name="Gabriel" age="19" country="Brasil" />
        <Developer name="Filipe" age="28" country="Brasil" />
        <Developer name="Mariana" age="24" country="Itália" />
      </header>
    </div>
  );
}

export default App;
