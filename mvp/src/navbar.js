import React from 'react';
import {Home} from './home.js';
import {Categories} from './categories.js';
import {Wishlist} from './wishlist.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class Navbar extends React.Component {
    render(){
      return(
        <Router>
          <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="">Multi-Brand App</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar__items" aria-controls="navbar__items" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar__items">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <Link to="/" class="nav-link" >Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/categories" class="nav-link" >Categories</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/wishlist" class="nav-link" >Wishlist</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/wishlist" component={Wishlist} />
          </React.Fragment>
        </Router>
      )
    }
  }