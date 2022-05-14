import  {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser} from '../model'


export interface IUserState {
    user: IUser[]
}

export const initialState: IUserState = {
    user: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       login(state, action:PayloadAction<IUser[]>){
           state.user = action.payload;
       },
       logout(state:any){
           state.user = null
       } 
    }
})

export default userSlice.reducer;

// actions
export const {login, logout} = userSlice.actions

//selector
export const userSelector = (state: any) => state.User.user.user