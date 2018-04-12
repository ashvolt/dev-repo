import React, { Component } from 'react';
import './App.css';
import CreateApplicant from './CreateApplicant';
import LoanInformation from './LoanInformation';
import LoanStatus from './LoanStatus';

class App extends Component {
  render() {
    return (
      <div>
        <CreateApplicant />
        <LoanInformation />
        <LoanStatus />
      </div>
    );
  }
}

export default App;
