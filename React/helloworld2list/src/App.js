import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SimpleList from "./components/SimpleList";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        {/* <Route Index element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/simplelist" element={<SimpleList />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
