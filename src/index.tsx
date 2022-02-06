import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Scss/styles.scss";
import App from "./App";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
ReactDOM.render(
  <Router>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  </Router>,
  document.getElementById("root")
);

// serviceWorkerRegistration.register();
