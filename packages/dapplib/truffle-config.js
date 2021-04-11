require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'idea problem occur trophy figure render remind history good arch outer gesture'; 
let testAccounts = [
"0x8ac7eb58b92ef054e9eee705928a292bae87133e00720b86ef8f9d46dce721bd",
"0x962b2821e5eaa7d6e6276a2d665c9378ed80ddf784e269f28e468c0d3bf28cec",
"0x27817d7af68ded507e98e951e647a1b95d991eaabb3e53a8c3ecdc1d311681e8",
"0xda24b4b8f1f1c5dbeb9b531a8003fb50cca7e5a27985325f4e2d3ed77eca608a",
"0xf0d1e218bacccdf8cf211d765293a8d05b2d396fc4159b5681162a8074af8a26",
"0x37a38c7cec62909944943d550de136b3f66eef97f93635c75ed30f9c7e434043",
"0xa8354da4305d5590639826e39bc044939c3c880774ebbfdca96c6a46981371b6",
"0x07ef38b05971e012aa1325075eafafd314f910c7f9843de5c6d2bce18e88ce5a",
"0x93de7c8c854f7d0b2b996dac77530c3ddbfb46ee7879be24bb1456829d57121e",
"0xa82fa28f4cd78df1641d93f75f1919a494470ade01bbb3bce4cd9f5301bb31fc"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

