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
        propertyInfo : []

    };

     async componentDidMount(){
         await this.loadAssets()

        console.log("Property array: ",this.state.propertyInfo);
    }

     async loadAssets(){

        if(this.state.account == undefined){
            this.setState({
                account : accountsList
            })
        }
        let iproperties = [];
        iproperties.push(instance.viewAssets());
        console.log("This is iproperties", iproperties);
        
        this.setState({
            properties : iproperties
        })
        

        for(let item of iproperties){
            console.log("In for loop");
            
             await this.propertyDetails(item);
        }
    }

    async propertyDetails(property){
        let details = await instance.landInfoOwner(property)
        console.log("Property Detials",details);
        
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
        propertyInfo.push(property, details[0],details[1],details[2],details[3],buttonEnabled,details[5],
            state,details[6],choiceButton)
            
        this.setState({
            propertyInfo
        })
        
        
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