var Web3 = require('web3');
var addresses = require('./serviceConfig.json');

web3 = new Web3(new Web3.providers.HttpProvider(addresses.networkPath + addresses.networkToken));

var testAddress = '0x41C694881B024a4098eB32D1ABFe0964fF515388';
var contractAddress = addresses.contractAddress;

console.log('Getting contract tokens balance.....');

console.log("Address: " + testAddress);

var tknAddress = (testAddress).substring(2);

var contractData = ('0x70a08231000000000000000000000000' + tknAddress);

web3.eth.call({
    to: contractAddress, 
    data: contractData  
    }, function(err, result) {
	if (result) { 
		var tokens = web3.utils.toBN(result).toString(); 
		console.log(addresses.tokenSymbol + ' Owned: ' + web3.utils.fromWei(tokens, 'ether'));
	}
	else {
		console.log(err); // Dump errors here
	}
});