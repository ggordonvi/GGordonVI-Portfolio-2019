import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Components - Main Pages
import Navbar from "./core/navbar";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";

// Components - Works Sub Pages
import SeatingApp from "./work/seatingapp";
import JillSellsTheCarolinas from "./work/jillsellsthecarolinas";
import PortfolioOld from "./work/portfolio-old";
import Portfolio from "./work/portfolio";
import Graphics from "./work/graphics";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Redirect exact path="/" to="/work" />
          <Route path="/work/seating-app" component={SeatingApp} />
          <Route
            path="/work/jill-sells-the-carolinas"
            component={JillSellsTheCarolinas}
          />
          <Route path="/work/portfolio-old" component={PortfolioOld} />
          <Route path="/work/portfolio" component={Portfolio} />
          <Route
            path="/work/graphics"
            component={Graphics}
          />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
