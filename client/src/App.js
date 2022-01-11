import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import AddBreed from "./components/AddBreed/AddBreed";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addBreed"  element={<AddBreed />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
