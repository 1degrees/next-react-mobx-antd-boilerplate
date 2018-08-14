import { Provider } from 'mobx-react'
import HomeStore from './home';

let store = null;
function initStore (isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return { homeStore : new HomeStore() }
  } else {
    if (store === null) {
      store = {  homeStore : new HomeStore() }
    }
    return store
  }
}

console.log(process.env.USER_URL)

export function WithStore({ children, isServer }) {
  return (
    <Provider { ...initStore(isServer) }>
      { children || '' }
    </Provider>
  )
}

export default store;