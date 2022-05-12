import  { configureStore} from '@reduxjs/toolkit'
import User from './userSlice'
import AllSubscriptions from './Subscriptions'



const store = configureStore({
    reducer: {
        User,
        AllSubscriptions,
    }
})



export default store;