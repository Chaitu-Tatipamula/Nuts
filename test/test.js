const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  const { ethers } = require("ethers");
  
  
  describe("create a wallet and conecting", function () {
    
    it("should create wallets and connect", async function () {
      const sender = "";
      const privatekeysender = "";
      const senderWallet = new ethers.Wallet(privatekeysender);
  
      const recepient = "";
      const privatekeyRecepient = "";
      const recepientWallet = new ethers.Wallet(privatekeyRecepient);
  
      const seed = "ABCDEFFGabcdefg123";
      const privatekey = ethers.keccak256(ethers.toUtf8Bytes(seed));
      const wallet = new ethers.Wallet(privatekey);
      const address = wallet.address
  
      const provider = ethers.getDefaultProvider(11155111);
      const signingWallet = wallet.connect(provider);
  
      const hash = ethers.keccak256(recepient)
      const reccepientHash = ethers.hashMessage(hash);
      console.log(hash);
  
      const combinedMessage = ethers.concat([
        ethers.toUtf8Bytes(privatekey),
        ethers.toUtf8Bytes(reccepientHash)
      ]); 
  
      const signature = await signingWallet.signMessage(combinedMessage);
      const signer = ethers.verifyMessage(combinedMessage,signature)
      console.log(signer);
    });
  
    describe("connect", function () {
      it("", async function () {
        
      });
  
      it("", async function () {
        
      });
  
      it("", async function () {
        
      });
  
      it("", async function () {
       
      });
    });
  
  
  });
  