import ethersProvider from '../ethereum/ether';

export const accountsList = ethersProvider.listAccounts();

console.log('accountsOfMetamask',accountsList);
