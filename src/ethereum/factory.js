import Web3 from 'web3';
import ethersProvider from './ether';
import { abiCT } from "./contractTools";

const ethers = require('ethers');
const address = '0xea93ad093ac070b7226648c4dae4e1bbfb90141f'; //kovan address

const metamaskSigner = ethersProvider.getSigner();

export const instance = new ethers.Contract(address, abiCT, metamaskSigner);