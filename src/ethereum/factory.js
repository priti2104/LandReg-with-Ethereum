import Web3 from 'web3';
import ethersProvider from './ether';
import { abiCT } from "./contractTools";

const ethers = require('ethers');
const address = '0x4d3411c4b8bfce2b876e03ff785771d4dd375eeb'; //kovan address

const metamaskSigner = ethersProvider.getSigner();

export const instance = new ethers.Contract(address, abiCT, metamaskSigner);