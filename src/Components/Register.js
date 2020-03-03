import React,{Component} from 'react';
// import ethersProvider  from "../ethereum/ether";
import { instance } from "../ethereum/factory";
import { accountsList } from "../ethereum/accountsList"

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
    console.log("SurveyNumber is ",this.state.surveyNumber);
    console.log("CurrentOwner is ",this.state.CurrentOwner);
    console.log("MArketValue is ",this.state.marketValue);
    // console.log("This is accountList from there", accountsList);
    
    
    const propertyId = await instance.computeId(this.state.state, this.state.district, this.state.village, this.state.surveyNumber);

   const transaction = await instance.Registration(this.state.state, this.state.district, this.state.village, 
      this.state.surveyNumber, this.state.CurrentOwner, this.state.marketValue, propertyId);
            
      if(!transaction){
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