require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name renew magic history inflict forum flock stove'; 
let testAccounts = [
"0x13bd0b66ad8fc8a7005967ffe9b1232116e3937e198d92cc315ef33614f09357",
"0x28f5b951f202374fb0c2e14a678a33613688133e411a020adf5f1b131c30d831",
"0x976c251b1d14659793ded583055a71da03360778fd0083e737d880a1b1f71d1f",
"0x69fdefb76c315935269ca2529a3c0c0168aee097e6acec97eb53bedc6bf6fd00",
"0x02b9109c45e5f7778115ffccff5565744c59f8fe84b804f5edf3fe79072a2266",
"0x4209886178d1c8ac0bf6287f4335b3552c94447c98d0a280f9bdc028528cdc95",
"0x6e9e278c46972f8ebcdca301c05690641cf37fe894d44177ea4f8f7240f355b4",
"0x17cd75d6a7c4c9c1b2aa1f0e2b676815b014cad62e71e4bd57faf7f2c9e534d8",
"0x10538f735728970cde7836a72cc0b546237bf135e80f4cbdcd58ff0c3bf5968b",
"0x27cb785cd5e6199f06f1f2143714974ed477399e8b2ce3bdfda8d44f2598485a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

