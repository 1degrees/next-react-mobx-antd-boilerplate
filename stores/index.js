import HomeStore from './home';


let store = null;
function initStore (isServer) {
  if (isServer) {
    return {  homeStore : new HomeStore() };
  } else {
    if (store === null) {
      store = { homeStore : new HomeStore() }
    }
    return store
  }
}
export default initStore;