import { connectRouter, routerMiddleware } from "connected-react-router"
import { history } from './historys';
import { createStore, combineReducers, applyMiddleware } from "redux";

import reducers from "./reducers"; // Or wherever you keep your reducers
  
// Create a history of your choosing (we're using a browser history in this case)
  
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
  
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

export default function configureStore(preloadedState) {
    return createStore(
        combineReducers({
            ...reducers,
            router: connectRouter(history)
        }),
      preloadedState,
      applyMiddleware(middleware),
    )
}