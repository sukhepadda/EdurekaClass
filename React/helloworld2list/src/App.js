import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SimpleList from "./components/SimpleList";
import ListWithComponents from "./components/ListWithComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simplelist" element={<SimpleList />} />
          <Route path="/listwithcomponents" element={<ListWithComponents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
