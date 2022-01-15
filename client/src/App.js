import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import AddBreed from "./components/AddBreed/AddBreed";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NabVar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addBreed"  element={<AddBreed />} />
          <Route path="/:id" element={<Detail />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
