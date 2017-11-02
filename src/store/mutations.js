import * as types from './mutation-types'

const mutations = {
  [types.SET_CITYNAME](state, cityName) {
    state.cityName = cityName
  },
  [types.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_STORELIST](state, storeList) {
    state.storeList = storeList
  }
}

export default mutations