import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import ImgGallery from "./pages/ImgGallery";
import VidGallery from "./pages/VidGallery";
import PracticeCal from "./pages/PracticeCal";
import BoatCal from "./pages/BoatCal";
import Links from "./pages/Links";
import NoMatch from "./pages/NoMatch";
import Navb from "./components/Nav";
import Footer from "./components/Footer";
import "./style.css";


function App() {
  return (
    <Router>
      <div>
        <div className="footer-helper">
          <Navb />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/News" component={News} />
            <Route path="/Article/:id" component={Article}/>
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/ImgGallery" component={ImgGallery} />
            <Route exact path="/VidGallery" component={VidGallery} />
            <Route exact path="/PracticeCal" component={PracticeCal} />
            <Route exact path="/BoatCal" component={BoatCal} />
            <Route exact path="/Links" component={Links} />
            <Route component={NoMatch} />
          </Switch>
        </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
