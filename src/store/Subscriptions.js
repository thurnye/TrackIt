import  {createSlice} from '@reduxjs/toolkit'


const subscriptions = {
    subs: null,
    singleRecipe: null,
}

const subscriptionsSlice = createSlice({
    name: 'subs',
    initialState: subscriptions,
    reducers: {
        // all all subs from the database
       getSubscriptions(state, action){
           state.subs = action.payload.data;
       },

       getSingleSubscriptions(state, action){
           const subs = action.payload.data
           state.singleRecipe = subs
       }
    }
})

export default subscriptionsSlice.reducer;
export const subscriptionActions = subscriptionsSlice.actions