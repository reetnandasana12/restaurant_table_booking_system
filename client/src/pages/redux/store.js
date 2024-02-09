import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { hotelsReducer } from './reducers/hotelReducer';
import { alertsReducer } from './reducers/alertReducer';
import { bookingsReducer } from './reducers/bookingReducer';

const rootReducer = combineReducers({
  hotelsReducer,
 alertsReducer,
 bookingsReducer
});

// Use composeWithDevTools correctly
const composeEnhancers = composeWithDevTools({
  // Specify extension options if needed
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
