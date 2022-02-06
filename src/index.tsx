import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
ReactDOM.render(
  <Router>
    <App>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </App>
  </Router>,
  document.getElementById("root")
);

// serviceWorkerRegistration.register();
