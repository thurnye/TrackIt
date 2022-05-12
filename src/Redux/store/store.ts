import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import * as api from '../../Api/api'
import rootReducer, { RootState } from '../reducer/rootReducer'

export const getStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }),
  })

//   if (process.env.NODE_ENV === 'development' && module) {
//     module.accept('./rootReducer', () => {
//       const newRootReducer = require('./rootReducer').default
//       store.replaceReducer(newRootReducer)
//     })
//   }

  return store
}

const store = getStore()
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, typeof api, Action<string>>
