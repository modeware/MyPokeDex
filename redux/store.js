import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import {toggleDarkMode,toggleLightMode} from './actions'
import thunk from 'redux-thunk'

const store=createStore(reducer,applyMiddleware(thunk))

store.dispatch(toggleDarkMode({mode:'white',font:'black'}))
store.dispatch(toggleLightMode({mode:'black'}))

export default store