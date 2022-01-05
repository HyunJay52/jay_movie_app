
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Navigation />
         <Route path="/" exact={true} component={Home} />
         <Route path="/about" component={About} />
         <Route path="/movie/: id" component={Detail} />
      </Routes>
    </BrowserRouter>
    // <HashRouter>
    //   <Navigation />
    //   <Route path="/" exact={true} component={Home} />
    //   <Route path="/about" component={About} />
    //   <Route path="/movie/: id" component={Detail} />
    // </HashRouter>
  );
}

export default App;