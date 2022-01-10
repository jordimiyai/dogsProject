import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" exact element={<Landing/>}/>
        <Route path="/home" exact element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
