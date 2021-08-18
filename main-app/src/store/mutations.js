export default {
  setRouterRequestStatus (state, payload) {
    state.isRouterRequestStatus = payload
  },
  saveCurrActiveMenu (state, payload) {
    sessionStorage.setItem('currPage', payload)
    state.currActiveMenu = payload
  },
  saveMenuRoutes (state, payload) {
    state.menuRoutes.push(...payload)
  },
  saveCurrActiveSubMenu (state, payload) {
    state.currActiveSubMenu = payload
  }
}
