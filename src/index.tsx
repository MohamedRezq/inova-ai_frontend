import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StateProvider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

// Import both Sass & Bootstrap styles
import './styles/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>
);
