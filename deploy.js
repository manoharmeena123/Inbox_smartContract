const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const {abi, evm } = require("./compile");

const provider = new HDWalletProvider(
  "flash vote session fluid usage supply inject mule hair drift cinnamon camp",
"https://sepolia.infura.io/v3/455ac02833ac499280f1d41ef8a135dc"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();


//flash vote session fluid usage supply inject mule hair drift cinnamon camp