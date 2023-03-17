import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ListWithAccordion from "./components/ListWithAccordion";
import CatPage from "./components/CatPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listwithaccordion" element={<ListWithAccordion />} />
          <Route path="/listwithaccordion?id" element={<CatPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
