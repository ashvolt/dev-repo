import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/jquery/'
import '../node_modules/bootstrap/';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import {Navbar} from './navbar.js'

export class Fetchdata extends React.Component{
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
ReactDOM.render(<Navbar />, document.getElementById('root'));