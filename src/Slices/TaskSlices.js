import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskslist: [],
    selectedTask: {}

}

export const tasksSlice = createSlice(
    {
        name: "tasksSlice",
        initialState: initialState,
        reducers: {
            addTaskToList: (state, action) => {
                console.log("action",action)
                // const id = action.payload.length+1
                const id = Math.random() * 100
                let task = { ...action.payload, id }
                state.taskslist.push(task)
            },
            removeTaskFromList: (state, action) => {
                state.taskslist = state.taskslist.filter((task) =>
                    task.id !== action.payload.id
                )
            },
            updateTaskInList: (state, action) => {
                state.taskslist = state.taskslist.map((task) => 
                    task.id === action.payload.id ? action.payload : task
                )
            },
            setSelectedTask:(state,action)=>{
                state.selectedTask=action.payload
            }

        }

    }
)

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask}=tasksSlice.actions
export default tasksSlice.reducer