import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import Block from "./pages/block.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/block" element={<Block />} />
    </Routes>
  </Router>
);
