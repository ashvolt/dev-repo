import React, { Component } from 'react';
import {ApplicantForm} from './CreateApplicant'
import './Create_applicant.css';

var FormFields = require('./Loan_information.json');

export default class LoanInformation extends Component {
    constructor(props) {
        super(props);
        this.state ={display: "none"}
      }
    accordian = () => {
        if(this.state.display === "none"){
            this.setState ( {display :"block"});
        }
        else{
            this.setState({display:"none"});
        }
    }

    render(){
        let display_status = this.state.display;
    return(
        <div className="create-applicant-form">
            <div className="accordian-header" onClick={this.accordian}>Please specify the Loan Information</div>
            <div className="create-applicant-panel" style={{display:display_status}}> 
            <div className="form-container">
                <ApplicantForm {...FormFields.Loan_Information}/></div>
                <div className="footer">
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}


}