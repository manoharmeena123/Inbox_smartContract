// contract test code will go here

const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3")
const web3 = new Web3(ganache.provider());
const {abi, evm} = require("../compile")

let account;
let inbox;
beforeEach(async()=>{
    //Get a list of all accounts
  account=  await web3.eth.getAccounts()
    //Use one of thosw accounts to deploy the contract

inbox =await new web3.eth.Contract(JSON.parse(abi)).deploy({
    data:evm.bytecode.object, arguments:['Hi there!']
}).send({from:account[0], gas: '1000000'})
}
)

describe("Inbox", ()=>{
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
      });

    it('has a default message', async()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!')
    })
    it('can change the message', async()=>{
        await inbox.methods.setMessage('bye').send({from:account[0]})
      const message = await inbox.methods.message().call()
      assert.equal(message, 'bye');

    })
})


















////////////////////////////////////////////////
// class Car{

//     park(){
//         return "stopped";
//     }
//     drive(){
//         return "vroom";
//     }
// }
// let car;
// beforeEach(()=>{
//   console.log("xxxxxxxxxxxxxxxxxxxxxxx")
//    car = new Car();
// })

// describe('Car', ()=>{
//     it('can park',()=>{
//  //const car= new Car();
//  assert.equal(car.park(),"stopped");
//     })

//     it('car drive',()=>{
//     //    const car = new Car();
//         assert.equal(car.drive(), 'vroom');
//     })
// })