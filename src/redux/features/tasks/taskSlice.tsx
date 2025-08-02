import type { RootState } from "@/redux/app/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'
import { removeUser } from "../Users/UserSlice";


interface InitialState {
    tasks: ITask[],
    filter: "all" | "high" | "medium" | "low",
}

// Define the initial state using that type
const initialState: InitialState = {
    tasks: [

    ],
 
    filter: "all"

}


export const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

        addTask: (state, action: PayloadAction<ITask>) => {

            const id = uuidv4()

            const taskData = {
                ...action.payload, id
            }

            state.tasks.push(taskData)

        },

        toggleCompleteState: (state, action: PayloadAction<string>) => {

            state.tasks.forEach((task) => {
                task.id === action.payload ? (task.isComplete = !task.isComplete) : task
            })

        },

        filterState: (state, action: PayloadAction<"all" | "high" | "medium" | "low">) => {
            state.filter = action.payload
        }

    },
    extraReducers : (builder) => {
        builder.addCase(removeUser , (state , action)=>{
            state.tasks.forEach(task => task.user === action.payload ? task.user = null : task)
        })

    }

})
export const selectTasks = (state: RootState) => {
    if (state.todo.filter === 'low') {
        return state.todo.tasks.filter((task) => task.priority === 'Low')
    }
    if (state.todo.filter === 'medium') {
        return state.todo.tasks.filter((task) => task.priority === 'Medium')
    }
    if (state.todo.filter === 'high') {
        return state.todo.tasks.filter((task) => task.priority === 'High')
    }
    return state.todo.tasks
}



export const { addTask, filterState } = todoSlice.actions
export const { toggleCompleteState } = todoSlice.actions
export default todoSlice.reducer;