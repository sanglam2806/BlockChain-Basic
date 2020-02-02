const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

const compliedEcommerce= require('../build/Ecommerce.json');

let ecommerce;
let seller;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
 
  ecommerce = await new web3.eth.Contract(JSON.parse(compliedEcommerce.interface))
    .deploy({ data: compliedEcommerce.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

});

describe('Ecommerce Contract', () => {
  it('deploys a contract', () => {
    assert.ok(ecommerce.options.address);
  });
  it('Creat item test',async ()=>{
    await ecommerce.methods.CreateItem("haha","hihi",1).send({
      from: accounts[0],
      gas:'1200000'
    });
    await ecommerce.methods.CreateItem("haha","hihi",2).send({
      from: accounts[0],
      gas:'1200000'
    });
    await ecommerce.methods.BuyItem(0).send({
      from: accounts[1],
      value: web3.utils.toWei('2', 'ether'),
      gas:'1200000'
    });
    const itemsForSell = await ecommerce.methods.GetItemForSale().call({
      from: accounts[0]
     });
   console.log(itemsForSell);
   const seller = await ecommerce.methods.seller().call();
   assert.equal(accounts[0],seller);
   console.log(seller);
   const itemsList = await ecommerce.methods.items().call();
   console.log(itemsList.itemsForSell[1].name);
  });

  // it('Buy item',async ()=>{
  //   const itemsList = await ecommerce.methods.items(0).call();
  //   assert.equal("haha",itemsList.name);
  //   await ecommerce.methods.BuyItem(0).send({
  //     from: accounts[1],
  //     value: web3.utils.toWei('2', 'ether'),
  //     gas:'1200000'
  //   });
  //   const itemsForSell = await ecommerce.methods.GetItemForSale().call({
  //     from: accounts[1]
  //    });
  //  console.log(itemsForSell);
  //});

 

  // it('Send money', async () => {
  //   await ecommerce.methods.Payment().send({
  //     from: accounts[0],
  //   });
  //   // const initialBalance = await web3.eth.getBalance(accounts[0]);
  //   // console.log(initialBalance);
  // });
});
