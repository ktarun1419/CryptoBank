import { Vue } from "vue-class-component";
import store from "@/store";
import Web3 from 'web3/dist/web3.min.js'
import token from "@/utilis/token";
import bank from "@/utilis/bank";
import dataSetup from "@/mixins/datasetup";

export default class transaction extends Vue {
    /**
     * lendingTransaction
     */
    public lendingTransaction(amount: string|number, months: number) {
        let web3 = new Web3(store.state.provider);
        let tokenAddress = token[0].contract.address;
        let bankAddress = bank[0].contract.address;
        let tokeninstance = new web3.eth.Contract(token[0].contract.abi, tokenAddress);
        let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
        let txApprove: object = {
            from: store.state.walletAddress,
            to: tokenAddress,
            data: tokeninstance.methods.approve(bankAddress, amount).encodeABI()
        }
        let txLend: object = {
            from: store.state.walletAddress,
            to: bankAddress,
            data: bankinstance.methods.lend(amount, months).encodeABI(),
            // gas: web3.utils.toHex(0.00020189 * 1e9)
        }
        let approve = web3.eth.sendTransaction(txApprove)
        console.log(approve)
        approve.then((result) => {
            alert(result.transactionHash)
        }
        ).catch((e) => {
            console.log(e)
        })
        let stake = web3.eth.sendTransaction(txLend)
        stake.then((result) => {
            alert(result.transactionHash)
        }
        ).catch((e) => {
            alert(e.message)
        })

    }
    /**
     * borrow
index:number     */
    public borrow(amount: string | number, index: string | number) {
        let web3 = new Web3(store.state.provider);
        let bankAddress = bank[0].contract.address;
        
        let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
        let txBorrow: object = {
            from: store.state.walletAddress,
            to: bankAddress,
            value: amount,
            data: bankinstance.methods.borrow(index).encodeABI(),
            gas: web3.utils.toHex(0.00020189 * 1e9)
        }
        let stake = web3.eth.sendTransaction(txBorrow)
        stake.then((result) => {
            alert(result.transactionHash)
        }
        ).catch((e) => {
            alert(e.message)
        })
    }
    /**
     * payback
     */
    public payback(index: number | string) {
        let web3 = new Web3(store.state.provider);
        let bankAddress = bank[0].contract.address;
        let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
        let txPayback: object = {
            from: store.state.walletAddress,
            to: bankAddress,
            data: bankinstance.methods.payback(index).encodeABI(),
            gas: web3.utils.toHex(0.00020189 * 1e9)
        }
        let stake = web3.eth.sendTransaction(txPayback)
        stake.then((result) => {
            alert(result.transactionHash)
        }
        ).catch((e) => {
            alert(e.message)
        })
    }
    /**
     * withdraw
index:number|string     */
    public withdraw(index: number | string) {
        let web3 = new Web3(store.state.provider);
        let bankAddress = bank[0].contract.address;
        let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
        let txPayback: object = {
            from: store.state.walletAddress,
            to: bankAddress,
            data: bankinstance.methods.withdraw(index).encodeABI(),
            // gas: web3.utils.toHex(0.00020189 * 1e9)
        }
        let stake = web3.eth.sendTransaction(txPayback)
        stake.then((result) => {
            alert(result.transactionHash)
        }
        ).catch((e) => {
            alert(e.message)
        })
    }
    /**
     * getdata
     */
    public getCurrentIndex() {
        let final=0
        async function current() {
        let web3 = await new Web3(store.state.provider);
        let bankAddress = bank[0].contract.address;
        let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
        let values: any = bankinstance.methods.getCurrentIndex().call()
        values.then((result: number) => {
           final=result
           console.log(result)
           transaction.prototype.totalData(result);
           store.commit("set_currentIndex", result)
            return result

            
        }
        ).catch((e) => {
            console.log(e)
        })
        } 
        return current()
    }
    /**
     * name
     */
    /**
     * totalData
     */
    public totalData(current:number):number[] {
        let final:number[]=[]
        async function getdata() {
            
            let web3 = new Web3(store.state.provider);
            let bankAddress = bank[0].contract.address;
            let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
           let amount:number[]=[0]
           
            console.log('currentindex',current)
            for (let index = 0; index <= current; index++) {
                let values: any = bankinstance.methods.totallenddata(index).call();
               
                values.then((result) => {
                    final.push(result.amount)
                    store.commit("set_totalData",result.amount)
                }).catch((e) => {
                    console.log(e)
                })
            }
            store.commit("set_marketData",true);
            return amount
        }
         getdata();
         return final
    }
    public getLatestprice() {
        let final:number=0
        async function current() {
        let web3 = await new Web3(store.state.provider);
        let bankAddress = bank[0].contract.address;
        let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
        let values: any = bankinstance.methods.getLatestPrice().call()
        values.then((result: number) => {
            final= result
            console.log(result)
            store.commit("set_currentPrice",result)
        }
        ).catch((e) => {
            console.log(e)
        })
        } 
        current();
        return final
    }
    public gettotalLendAmount() {
        let final:number=0
        async function current() {
        let web3 = await new Web3(store.state.provider);
        let bankAddress = bank[0].contract.address;
        let bankinstance = new web3.eth.Contract(bank[0].contract.abi, bankAddress);
        let values: any = bankinstance.methods.totalLendamount().call()
        values.then((result: number) => {
            final= result
            console.log(result)
            store.commit("set_totalLendAmount",result)
        }
        ).catch((e) => {
            console.log(e)
        })
        } 
        current();
        return final
    }
}