import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Scss/styles.scss";
import App from "./App";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { TransectionsProvider } from "./store/Provider/transectionProvider";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
ReactDOM.render(
  <Router>
    <TransectionsProvider>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </TransectionsProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
