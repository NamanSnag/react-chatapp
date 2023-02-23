import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/store";

import "./App.css";
import { Chat } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Chat />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
