import React, { Component, Fragment } from 'react';
import './Create_applicant.css';

var FormFields = require('./Applicant_form_fields.json');

 export const ApplicantForm =(props)=> {
        
           let html = Object.keys(props).map((title_field, index)=>{
               return(
                   <Fragment>
                    <h4 id="heading" key={index}>{title_field}</h4>
                    <div className="input-fields">
                    {props[title_field].map((input_fields,index) => {
                        return(<div className={input_fields.className}>

                        <label key={index}>{input_fields.title}</label>
                        <input type="text"></input>
                        </div>);
                        
                    })}
                    </div>
                   </Fragment>
                );          
            });

            return html;
} 



export default class CreateApplicant extends Component {
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
            <div className="accordian-header" onClick={this.accordian}>Create Applicant</div>
            <div className="create-applicant-panel" style={{display:display_status}}> 
            <div className="form-container">
                <ApplicantForm {...FormFields.form}/></div>
                <div className="footer">
                    <button>CREATE</button>
                </div>
            </div>
        </div>
    )
}


}



