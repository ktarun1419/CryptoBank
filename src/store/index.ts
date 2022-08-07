import { createStore } from 'vuex'

export default createStore({
  state: {
    topbarAcc:'Connect',
    provider:'',
    walletAddress:'',
    chainId:'',
    network:'',
    balance:'',
    currentIndex:0,
    totalData:[''],
    marketData:false,
  },
  getters: {
  },
  mutations: {
    set_TopbarAcc(state, payload){
      state.topbarAcc=payload
    },
    set_Provider(state,payload){
      state.provider=payload
    },
    set_WalletAddress(state,payload){
      state.walletAddress=payload
    },
    set_chainId(state,payload){
      state.chainId=payload
    },
    set_network(state, payload) {
      state.network = payload
    },
    set_balance(state,payload){
      state.balance=payload
    },
    set_currentIndex(state,payload){
      state.currentIndex=payload
    },
    set_totalData(state,payload){
      state.totalData.push(payload)
    },
    set_marketData(state,payload){
      state.marketData=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
