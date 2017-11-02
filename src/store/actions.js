import * as types from './mutation-types'

export const setCityName = function ({ commit, state }, cityName) {
  localStorage.CITY = cityName
  commit(types.SET_CITYNAME, cityName)
}

export const setUserInfo = function ({ commit, state }, userInfo) {
  commit(types.SET_USERINFO, userInfo)
}

let findIndex = function (list, curStore) {
  return list.findIndex(item => {
    return item.shopId === curStore.shopId
  })
}
export const setStoreList = function ({ commit, state }, curStore) {
  let list = state.storeList
  let index = findIndex(list, curStore)
  if (index > -1) {
    list[index].selected = !list[index].selected
  } else {
    list.push(curStore)
  }
  commit(types.SET_STORELIST, list)
}