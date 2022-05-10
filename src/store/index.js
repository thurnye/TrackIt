import  { configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import SubscriptionReducer from './Subscriptions'



const store = configureStore({
    reducer: {
        userLog: userReducer,
        allSubs: SubscriptionReducer
    }
})



export default store;