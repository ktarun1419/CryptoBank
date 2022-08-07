import store from "@/store";
import Web3 from "web3/dist/web3.min.js";
import Web3Modal, { CHAIN_DATA_LIST, Provider } from "web3modal";
import { Vue, Options } from "vue-class-component";
@Options({})
export default class Metamask extends Vue{
    
    public async provider() {
       
        let web3modal: any = new Web3Modal({
            network: "matic",
            cacheProvider: true,
          
          });
          console.log('function called')
          let provider: any = await web3modal.connect();
          store.commit("set_Provider", provider);
          let web3: any = new Web3(provider);
          let account: any =  web3.eth.getAccounts();
          account.then((result)=>{
              store.commit("set_WalletAddress",result[0])
            let account: string;
            if (result[0] != null) {
              let nim = result[0].split("");
              account =
                nim[0] +
                nim[1] +
                nim[2] +
                nim[3]+
                "..." +
                nim[37] +
                nim[38] +
                nim[39] +
                nim[40]
              store.commit("set_TopbarAcc", account);
               
            }
          })
          let chain = web3.eth.getChainId();
              chain.then((result) => {
                console.log(result);
                
                if (result==42) {
                    store.commit("set_chainId", result)
                    store.commit("set_network", CHAIN_DATA_LIST[result].network);
                }
                else{
                  try {
                     const web3=new Web3(provider)
                      web3.currentProvider.request({
                       method: 'wallet_switchEthereumChain',
                         params: [{ chainId: Web3.utils.toHex(42) }],
                       });
                       store.commit("set_chainId", result)
                       store.commit("set_network", CHAIN_DATA_LIST[result].network);
                   } catch (switchError) {
                     // This error code indicates that the chain has not been added to MetaMask.
                   }
                }
              })
         return true
    }
}