var web3;

// Contract Address and its ABI for Data Extraction
const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "member", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "etherAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Buy", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "member", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "etherAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Sell", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_bnb_inc_token_rate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_bnb_token_rate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_bnb_token_rate_per", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_decimal", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_transfer_address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aaa", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "transfer_address", "type": "address" }], "name": "add_transfer_address", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "admin_transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buy", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "gap_price_array", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwnerBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "bounty", "type": "address" }, { "internalType": "uint256", "name": "amounts", "type": "uint256" }], "name": "push_bounty", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "can_sell", "type": "uint8" }], "name": "sell_allowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tot_supp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "total_pur_token", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const address = "0x8Ad009b12482Ae0f298cBaE984f17F0A964Aba0F";


// Asssigning Variables to every required Class for the HTML File 
const ethereumButton = document.querySelector('.enableEthereumButton');

const showAccount = document.querySelector('.showAccount');
const showEthBalance = document.querySelector('.showBalance');
const showTokenBalance = document.querySelector('.tokenBalance');

const sendEthButton = document.querySelector('.sendEthButton');
const buyButton = document.querySelector('.buyTokenButton');

const etherTransaction = document.querySelector('.showEthTran');
const tokenTransaction = document.querySelector('.showTokenTran');

const accountS = "0x1e889b07c445a2307A6E371Df63A109D6D0D330d";
const accountP = "0x1277A754062E3D54a9eE65fE1E319811C3f41802";
const account3 = "0x27C8917F69576693B789F472700BE9aa40ce5dA2";

const showTokenName = document.querySelectorAll('.tokName');
const showTokenSymbol = document.querySelectorAll('.tokSymbol');
const showTokenAddress = document.querySelectorAll('.tokAddress');
const showTokenTS = document.querySelector('.tokTS')


// Display Sale Amount Left for Buying
const saleEthBalance = document.querySelector('.ethLeft');
saleEthBalance.innerHTML = "10.0 ETH Left";

const tokenOnSale = 530000;


// Calculate Tokens as per User's Input for ETH
const minAmount = 0.005;
const maxAmount = 0.5;
const oneEth = 53000;
const saleValue = 10;
const userInput = document.getElementById('inputAmount').value;
const equiTokens = userInput * oneEth;

// Alert Messages for Respective Input Values
function getInput(userInput) {
    var userInput = document.getElementById('inputAmount').value;
    var equiTokens = userInput * oneEth;
    alert(`${userInput} ETH can fetch you ${equiTokens.toFixed(0)} Tokens`);
}


// Progress Bar Logic
const progress = document.querySelector('.progress');
const loading = document.querySelector('.loading');
let i = 0;
var count = i + equiTokens.toFixed(0);
console.log(count)
const fakePercent = [];
const interval = setInterval(() => {
    progress.style.width = fakePercent[i] + '%';
    loading.innerHTML = fakePercent[i] + '%';
    i++;

    if (i == fakePercent.length) {
        clearInterval(interval);
        loading.innerHTML = "COMPLETED";
    }
}, 1000);





// Countdown For Specific Date and Time Set
var st = new Date();
document.getElementById('start-time').innerHTML = st;

var et = new Date(st);
et.setMinutes(st.getMinutes() + 30);
document.getElementById("end-time").innerHTML = et;

// Set Date we will be Counting Down To
var countDate = new Date("Jan 20, 2022 17:30:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var diff = countDate - now;

    // Calculations for CountDown
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + 'd ' + hrs + 'h ' + mins + 'm ' + secs + 's';

    if (diff < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "ALREADY EXPIRED"
    }
}, 100);

/* Converting IST to UTC Time
var isoDateString = new Date().toISOString();
console.log(isoDateString);
*/


// Assigning Function for ConnectToMetaMask Button
ethereumButton.addEventListener('click', () => {
    estConnection();
});

// Display Details only After MetaMask is Connected
async function estConnection() {
    await web3.currentProvider.enable();
    web3 = new Web3(web3.currentProvider);

    // Display Wallet Address of the Connected Account on MetaMask
    var accounts = await web3.eth.getAccounts();
    var account = accounts[0];
    showAccount.innerHTML = account;

    // Display Ether Balance of the Connected Wallet from MetaMask
    var ethbalance = await web3.eth.getBalance(account);
    showEthBalance.innerHTML = web3.utils.fromWei(ethbalance, "ether");


    const myContract = new web3.eth.Contract(abi, address);
    //tokenbalance = await myContract.methods.balanceOf(account).call();
    //showTokenBalance.innerHTML = web3.utils.fromWei(tokenbalance, "ether");

    tokenName = await myContract.methods.name().call();
    for (i = 0; i < showTokenName.length; i++) {
        showTokenName[i].innerHTML = tokenName;
    }


    tokenSymbol = await myContract.methods.symbol().call();
    for (i = 0; i < showTokenSymbol.length; i++) {
        showTokenSymbol[i].innerHTML = tokenSymbol;
    }


    //tokenTS = await myContract.methods.totalSupply().call();
    //showTokenTS.innerHTML = web3.utils.fromWei(tokenTS, "ether");

    tokenAddress = await myContract.options.address;
    for (i = 0; i < showTokenAddress.length; i++) {
        showTokenAddress[i].innerHTML = tokenAddress;
    }
}



buyButton.addEventListener('click', () => {
    verifyTokenTransaction();
})

async function verifyTokenTransaction() {
    if (web3.currentProvider) {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const minAmount = 0.005;
        const maxAmount = 0.5;
        const userInput = document.getElementById('inputAmount').value;
        if (userInput < minAmount) {
            alert("Entered Amount Lower than Min Contribution");
        }
        else if (maxAmount < userInput) {
            alert("Entered Amount Higher than Max Contribution");
        }
        else {
            const amount = web3.utils.toWei(userInput, "ether");
            const myContract = new web3.eth.Contract(abi, address);

            await myContract.methods.buy().send({ from: account, value: amount })
                .on('transactionHash', (TokTxHash) => {
                    tokenTransaction.innerHTML = TokTxHash;
                })
                .catch((error) => console.log(error));
        }

    }
}

/*
sendEthButton.addEventListener('click', () => {
    verifyEthTransaction();
})
*/
async function verifyEthTransaction() {
    if (web3.currentProvider) {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const oneEth = 53000;
        const userInput = document.getElementById('inputAmount').value;
        const equiTokens = oneEth * userInput;
        const strTokens = equiTokens.toString();
        const amount = web3.utils.toWei(strTokens, "ether");

        const myContract = new web3.eth.Contract(abi, address);

        await myContract.methods.transfer(account3, amount).send({ from: account })
            .on('transactionHash', (EthTxHash) => {
                etherTransaction.innerHTML = EthTxHash;
            })
            .catch((error) => console.log(error));
    }
}
