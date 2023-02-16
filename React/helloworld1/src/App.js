import "./App.css";
import FirstComponents from "./components/FirstComponents";
import SecondComponents from "./components/SecondComponents";
import PassingObject from "./components/PassingObject";
import InputOutput from "./components/InputOutput";
import Imgslideshow from "./components/imgslideshow/Imgslideshow";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstComponents />} />
          <Route path="/secondcomponent" element={ <SecondComponents />} />
          <Route path="/passingobject" element={<PassingObject /> } />
          <Route path="/inputoutput" element={<InputOutput /> } />
          <Route path="/imgslideshow" element={<Imgslideshow /> } />
        </Route>
      </Routes>

     
      
      
      
    </div>
  );
}

export default App;
