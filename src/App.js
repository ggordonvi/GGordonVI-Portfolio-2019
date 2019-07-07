import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Components - Main Pages
import Navbar from './components/navbar';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';

// Components - Works Sub Pages
import SeatingApp from './components/work/seatingapp';
import JillSellsTheCarolinas from './components/work/jillsellsthecarolinas';
import PortfolioOld from './components/work/portfolio-old';
import Portfolio from './components/work/portfolio';
import HtbBrochure from './components/work/htb-broucher';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Redirect exact path="/" to="/work" />
          <Route path="/work/seating-app" component={SeatingApp} />
          <Route path="/work/jill-sells-the-carolinas" component={JillSellsTheCarolinas} />
          <Route path="/work/portfolio-old" component={PortfolioOld} />
          <Route path="/work/portfolio" component={Portfolio} />
          <Route path="/work/healthy-tid-bits-brochure" component={HtbBrochure} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
