const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
//const compliedEcommerce= require('../build/Ecommerce.json');
const provider = new HDWalletProvider(
  'wire token erode grape east cream lazy review clinic hidden seek kitten',
  'https://rinkeby.infura.io/v3/b6f071b78bc34bf396a92a1a66ebf53a'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000',gasPrice: '20000000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);

  return result.options.address;
};
deploy();
//module.exports= { deploy };

