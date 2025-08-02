import type { RootState } from "@/redux/app/store"
import type { IUser } from "@/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import {v4 as uuidv4} from "uuid"

interface InitialState {
    users : IUser[]
}


const initialState : InitialState =  {
    users : [{
        id : 'abc',
        name : 'max'
    }]

}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {


        addUser: (state, action: PayloadAction<IUser>) => {

            const id = uuidv4()

            const UserData = {
                ...action.payload, id
            }

            state.users.push(UserData)

        },
        removeUser : (state , action : PayloadAction<string>) =>{
            state.users= state.users.filter(user => user.id !== action.payload )

        }

    }

})

export const selectUsers = (state : RootState) => {
    return state.userColl.users
}

export const {addUser } = userSlice.actions
export const {removeUser} = userSlice.actions

export default userSlice.reducer