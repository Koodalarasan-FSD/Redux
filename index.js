//React Redux - https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK
//React Redux - Actions - https://www.youtube.com/watch?v=2lxCaLJ2Rbk&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=5
//React Redux - Reducers - https://www.youtube.com/watch?v=qdAThMLtF98&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=6
//React Redux - Store - https://www.youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7
//React Redux - Mutiple Reducers - https://www.youtube.com/watch?v=apcda524MJA&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=9
//React Redux - Combine Reducers - https://www.youtube.com/watch?v=EKsoj96HQGY&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=10
//React Redux - Middleware - https://www.youtube.com/watch?v=8zPyXAWS0L4&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=11&pp=iAQB

const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'

    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

// (previousState,action)=>newState

/*
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }

} 
*/

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }

}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }

}


/*
Store Responsibilities-
- Holds application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listener)
 */

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() =>{})
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()