import React, { Component } from 'react';
// import ethersProvider from '../ethereum/ether';
// import instance from '../ethereum/factory';
import {instance} from '../ethereum/factory';
import  ethersProvider  from "../ethereum/ether";
import {accountsList} from '../ethereum/accountsList';
import { string, any } from 'prop-types';
// var converter = require('hex2dec');


class Home extends Component {

    state={
        accounts : [],
        account : '',
        properties : [],
        propertyInfo : [],
        displayInfo:[],
        count:''
    };
    
    
     async componentDidMount(){
         await this.loadAssets()
        // this.loadAssets()
        console.log("Property array: ",this.state.propertyInfo);
    }

     async loadAssets(){

        if(this.state.account == undefined){
            this.setState({
                account : accountsList
            })
        }
        let iproperties = any; 
        // iproperties.push(instance.viewAssets());
        iproperties = await instance.viewAssets();
    
        console.log("This is iproperties it containsid", iproperties);
        
        this.setState({
            properties : iproperties
        })
        

        for(let item of iproperties){
            console.log("In for loop");
            console.log("value of item variable is",typeof item);
            
             await this.propertyDetails(item.toNumber());
        }
    }

    async propertyDetails(property){
        let details = await instance.landInfoOwner(property) //Ikde details mdhe ghetoe value via function of smrtcontct
        // console.log("Property Detials",details);
        
        let state = true;
        let choiceButton = false;
        let buttonEnabled = details[4];
        if(details[5] == "0x0000000000000000000000000000000000000000"){
            state = false;
        }
        else{
            buttonEnabled = true;
        }

        let propertyInfo = [...this.state.propertyInfo];
        // propertyInfo.push(property, details[0],details[1],details[2],details[3].toNumber(),buttonEnabled,details[5],
        //     state,details[6],choiceButton) //**** Ikde Push krtoe 
         let displayDetails =propertyInfo.push({
             id:property,
             State:details[0],
             District:details[1],
            Village:details[2],
            SurveyNo:details[3].toNumber(),
            isAvailable:buttonEnabled,
            Requester:details[5],
            SomeDetail:details[6],
            CButton:choiceButton
         })
         console.log('display details',displayDetails,'type of display details',typeof displayDetails);
         
        

         let bagOfData=any;
         bagOfData = propertyInfo;
        //  console.log('this is bagOfData',bagOfData);
        //  console.log('');
        //  console.log('');
        //  console.log('displayDetails',displayDetails);
        let displayInfo = [...this.state.displayInfo]; 
        displayInfo = bagOfData;
        this.setState({
            displayInfo
        })    
        this.setState({
            propertyInfo
        })
        // console.log('this.state.propertyInfo',this.state.propertyInfo);
        
        
        return true;
    }

    
    async makeAvailableHandler(id,i){
      let Id = id;
      let index =i;
      let a;
      let propertyInfo;
      propertyInfo = [...this.state.propertyInfo];
      console.log('Here is propInfo',propertyInfo);
      
      for(a=0;a<3;a++){
          if(index==a){
            // alert('In the console with '+a+' '+'ID is '+Id)
            console.log('In the loop with index ',a,' Id is ',Id);
            console.log('status of the land ',a,' Data is',propertyInfo[a].isAvailable);
            propertyInfo[a].isAvailable = true;
            await instance.makeAvailable(Id);              
          }

      }

      this.setState({
          propertyInfo
      })

    }



render (){
    let details= this.state.propertyInfo;
    // console.log('this.bagOfData',this.bagOfData);
    
    // console.log('detials in render',details);
    
    let orgsData = details ? (
        details.map((details, i)=>{
            return[
                <div key ={i}>
        <p>Property ID :{details.id}</p>  
            <p>state:{details.State}</p>
            <p>district:{details.District}</p>
            <p>village:{details.Village}</p>
            <p>surveyNumber:{details.SurveyNo}</p>
            {/* <button>make Available</button> */}
            <button onClick={()=>this.makeAvailableHandler(details.id,i)}>make Available</button>
            <hr/>
            <br/>
         </div>
            ];
        })
    ):(
        <div>No data present
        </div>
    )
    return (<div>{orgsData}</div>) ;


};

}

export default Home;