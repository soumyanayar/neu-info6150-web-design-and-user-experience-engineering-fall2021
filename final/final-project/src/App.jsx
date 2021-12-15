import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Tools from "./pages/Tools";
import Feedback from "./pages/Feedback";
import FoodItem from "./components/FoodItem";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";

function App() {
  return (
    // <div>
    //   <Navbar />
    //    <div className="footer">
    //        <button className="tabs">
    //             COPYRIGHT 2021, Calorie Visualiser
    //         </button>
    //     </div>
    // </div>

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tools">
          <Tools />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/nutrients/:id" children={<FoodItem />}>
          <FoodItem />
        </Route>
        <Route path="/privacypolicy">
          <Privacy />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
