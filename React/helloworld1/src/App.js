import "./App.css";
import FirstComponents from "./components/FirstComponents";
import SecondComponents from "./components/SecondComponents";
import ThirddComponents from "./components/ThirddComponents";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstComponents />} />
          <Route path="/secondcomponent" element={ <SecondComponents />} />
          <Route path="/thirdcomponent" element={<ThirddComponents /> } />
        </Route>
      </Routes>

     
      
      
      
    </div>
  );
}

export default App;
