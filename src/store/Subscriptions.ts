import  {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ISubscription} from '../model'


export interface ISubscriptionState {
    subs: ISubscription[]
}

export const initialState: ISubscriptionState = {
    subs: []
}

const subscriptionsSlice = createSlice({
    name: 'subs',
    initialState,
    reducers: {
        // all all subs from the database
       getSubscriptions(state:any, action:PayloadAction<ISubscription[]>){
           state.subs = action.payload;
       }
    }
})

export default subscriptionsSlice.reducer;

//actions
export const {getSubscriptions} = subscriptionsSlice.actions

//selector
export const allSubscriptionsSelector = (state: any) => state.AllSubscriptions.subs