/*
 * @Author: jing.chen
 * @Date: 2021-08-12 10:35:25
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-12 10:59:52
 * @Description:
 */

const state = {
  dialogVisible: false
}
const getters = {

}
const mutations = {
  VIEW_MESSAGE_DIALOG (state, val) {
    state.dialogVisible = val
  }

}
const actions = {
  viewMessage ({ commit }, data) {
    commit('VIEW_MESSAGE_DIALOG', true)
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
