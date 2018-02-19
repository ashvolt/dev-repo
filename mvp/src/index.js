import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/jquery/'
import '../node_modules/bootstrap/';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Home=()=> (
    <React.Fragment>

      <h1>About Page</h1>

    </React.Fragment>
);
const Categories=()=> (

  <Fetchdata url='http://localhost:8080/MultiBrandCustomerEngagementAPP/rest/categories/getAllCategories'></Fetchdata>

  )  ;
const Wishlist=()=> (
  <React.Fragment>

    <h1>Wishlist Page</h1>

  </React.Fragment>
);
class Fetchdata extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: []
    };
  }

    componentDidMount(){
      axios.get(this.props.url)
      .then(res => {
        const list = res.data;
        this.setState({list})
      })
    };
    render(){
      return(
         <div>
       {this.state.list.map(category=>
         <div>{category.categoryName}</div>
      )}
    </div>
    
  );

  }
  
}
class Navbar extends React.Component {
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
ReactDOM.render(<Navbar />, document.getElementById('root'));