import React,{Component} from 'react';
// import ethersProvider  from "../ethereum/ether";
import { instance } from "../ethereum/factory";
import { accountsList } from "../ethereum/accountsList"
import { number, string } from 'prop-types';
const ethers = require('ethers');



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        state: '',
        district :'',
        village:'',
        surveyNumber:'',
        CurrentOwner:'',
        marketValue:''

     };
  }
    mySubmitHandler =async (event) => {
    event.preventDefault();
    //alert("You are submitting " + this.state.CurrentOwner);

    // const accounts = ethersProvider.listAccounts();

    console.log("State is ",this.state.state);
    console.log("District is ",this.state.district);
    console.log("Village is ",this.state.village);
    console.log("SurveyNumber is ",this.state.surveyNumber,'  ',typeof this.state.surveyNumber);
    console.log("CurrentOwner is ",this.state.CurrentOwner);
    console.log("MArketValue is ",this.state.marketValue,'  ',typeof this.state.marketValue);
    // console.log("This is accountList from there", accountsList);
    
      const temp1 = this.state.surveyNumber;

      //SurveyNumber to be passed
      let tempSurvey = parseInt(temp1);
      console.log('tempSurvey',tempSurvey);
      console.log('typeof tempSurvey',typeof tempSurvey);
      
      let temp2 = this.state.marketValue;

      //MarketValue to be passed
      let tempMarketValue = parseInt(temp2);
      console.log('tempMarketValue',tempMarketValue);
      console.log('typeof tempMarketValue',typeof tempMarketValue);
      
      
      // console.log("tempSurvey",tempSurvey,"typeof tempSurvey",typeof tempSurvey);
    let propertyId = await instance.computeId(this.state.state, this.state.district, this.state.village, tempSurvey);
    // console.log("PropertyId type is",typeof propertyId.toString());
    // console.log("PropertyId",propertyId.toString());
    let stringId = propertyId.toString();
    let propertyNumId = parseInt(stringId);
    // console.log('stringId',stringId);
    // console.log('typeOf stringId',typeof stringId);
      console.log('propertyNumId',propertyNumId,'typeof propertyNumId',typeof propertyNumId);
      
    
    
    
    // let tId = Number(propertyId);
    // console.log("nId------>",tId,"typeOfId",typeof tId);
    
  //  const transaction = await instance.Registration(this.state.state, this.state.district, this.state.village, 
  //     tempSurvey, this.state.CurrentOwner, tempMarketValue, propertyNumId);

      const transaction1 = await instance.Registration(this.state.state, this.state.district, this.state.village,tempSurvey,
                            this.state.CurrentOwner, tempMarketValue, propertyNumId)

      if(!transaction1){
        console.log("Transaction failed");
        
      }

      else{
        console.log("Transaction Successful");
        
      }



  };
  stateChangeHandler = (event) => {
    this.setState({
        state: event.target.value});
  }

  districtChangeHandler = (event) => {
    this.setState({
        district: event.target.value});
  }

  villageChangeHandler = (event) => {
    this.setState({
        village: event.target.value});
  }

  surveyNumberChangeHandler = (event) => {
    this.setState({
        surveyNumber: event.target.value});
  }

  CurrentOwnerChangeHandler = (event) => {
    this.setState({
        CurrentOwner: event.target.value});
  }

  marketValueChangeHandler = (event) => {
    this.setState({
        marketValue: event.target.value});
  }

      
  

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      
      <label>state</label>
      <input type='text'
      value={this.state.state}
        onChange={this.stateChangeHandler}/>
      <br/>
      <br/>

      <label>district</label>
      <input type='text' size="50"
      value={this.state.district}
        onChange={this.districtChangeHandler}/>
      <br/>
      <br/>

      <label>village</label>
      <input type='text' size="50"
      value={this.state.village}
        onChange={this.villageChangeHandler}/>
      <br/>
      <br/>

      <label>surveyNumber</label>
      <input type='text' size="50"
      value={this.state.surveyNumber}
        onChange={this.surveyNumberChangeHandler}/>
      <br/>
      <br/>

      <label>CurrentOwner</label>
      <input type='text' size="50"
      value={this.state.CurrentOwner}
        onChange={this.CurrentOwnerChangeHandler}/>
      <br/>
      <br/>

      <label>marketValue</label>
      <input type='text'
      value={this.state.marketValue} size="50"
        onChange={this.marketValueChangeHandler}/>
      <br/>
      <br/>

      

      <input
        type='submit'
      />
      </form>
    );
  }
}

export  default Register;