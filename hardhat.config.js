require("@nomiclabs/hardhat-waffle")

const ACCOUNT_KEY = process.env.ACCOUNT_KEY
const Account_Key_Test = ""

const MATIC_PRC_URL = "https://polygon-rpc.com/"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1337
        },
        matic: {
            url: MATIC_PRC_URL,
            accounts: [Account_Key_Test]
        }
    },
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}