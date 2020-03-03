import React, { Component } from 'react';
// import ethersProvider from '../ethereum/ether';
// import instance from '../ethereum/factory';
import {instance} from '../ethereum/factory';
import  ethersProvider  from "../ethereum/ether";
import { string, any } from 'prop-types';

class Home extends Component {
    state={
        accounts : [],
        account : string,
        properties : any,
        propertyInfo : []

    };

    componentDidMount(){
        window.addEventListener('load', (event)=>{
        console.log("Property list array : ",this.propertyInfo);
        
        })

        this.loadAssets()

        console.log("Property array: ",this.propertyInfo);
        
    }

    async loadAssets(){
        console.log("Account arrat fromm servuce page",this.state.account);
    const contractInstance = instance;
    let metaAccounts = ethersProvider.listAccounts();

    if(!contractInstance || !metaAccounts){
        const delay = new Promise(resolve => setTimeout(resolve, 200));
        await delay;
        console.log("Iteration");
        return await this.loadAssets()
        
    }
    if(this.state.account == undefined ){

        this.setState({
            account : metaAccounts
        })
  }

  const dProperties = await instance.viewAssets()
  this.setState({
      properties : dProperties
  })
  for(let item of dProperties){
    this.propertyDetails(item)
  }
}

async propertyDetails(property){
    let details = await instance.landInfoOwner(property)
    console.log("Land Details", details);

    let state = true;
    let choiceButton = false;
    let buttonEnabled = details[4];
    if(details[5] == "0x0000000000000000000000000000000000000000"){
        state = false;
    }
    else{
        buttonEnabled = true;
    }

    this.state.propertyInfo.push([property,details[0],details[1],details[2],details[3],buttonEnabled,details[5],state,details[6],choiceButton]);
    return true;
    
}



    render() {
        return (
            <div>
                This is the home page
                
            </div>
        );
    }
}

export default Home;