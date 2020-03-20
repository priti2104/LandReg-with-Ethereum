import React, { Component } from 'react';
import { instance } from '../ethereum/factory';
import { any } from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            state: '',
            district :'',
            village:'',
            surveyNumber:'',
            loaded : false
            // propertyId: any,
            
         };
      }

      mySearchHandler=async(event)=>{

        try {

          let propertyId = await instance.computeId(this.state.state,this.state.district,this.state.village,this.state.surveyNumber)
          console.log('property Id in search',propertyId);
          
          let landDetails = any;
          landDetails = await instance.landInfoUser(propertyId);
          this.setState({
            loaded : true                       //Using loaded
          })
          console.log('Setting loaded state this.state.laoded',this.state.loaded);   //setting loaded to false
          
            
        } catch (error) {
            
        }

      }

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

    render() {
        return (
            <form onSubmit={this.mySearchHandler}>
      
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

     

      

      <input type='submit'/>
      </form>
        );
    }
}

export default Search;