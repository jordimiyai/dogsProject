import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import AddBreed from "./components/AddBreed/AddBreed";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/ErrorPage/NotFound";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" index element={<Landing />} />
          <Route path="/dogs" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="addDog" element={<AddBreed />} />
            <Route path=":id" element={<Detail />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
