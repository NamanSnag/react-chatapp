import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { Chat } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Chat />
      </Router>
    </div>
  );
}

export default App;
