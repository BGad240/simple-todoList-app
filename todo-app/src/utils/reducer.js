// export const intState = {
//     task: "",
//     tasks: []
// }

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case "SET_TASK":               
//             return { ...state, task: action.payload };

//         case "ADD_TASK":
//             if (state.task.trim() === "") {
//                 alert("task is empty")
//                 return state
//             }
//             const nTask = { id: Date.now(), text: state.task }
//             return { ...state, tasks: [...state.tasks, nTask], task: "" };
//         default:
//             return state
//     }
// }



export const initialState = {
    task: "",
    tasks: JSON.parse(localStorage.getItem("tasks")) || []
}


export const reducer = (state, action) => {
    let updatedTasks;
    switch (action.type) {
        case "SET_TASK":
            return { ...state, task: action.payload };
        case "ADD_TASK":
            if (state.task.trim() === "") {
                alert("task is empty")
                return state
            }
            const ntask = { id: Date.now(), text: state.task }
            updatedTasks = [...state.tasks, ntask]
            localStorage.setItem("tasks", JSON.stringify(updatedTasks))
            return { ...state, tasks: updatedTasks, task: "" };
        case "DELETE_TASK":
            updatedTasks = state.tasks.filter((t) => t.id !== action.payload)
            localStorage.removeItem("tasks", JSON.stringify(updatedTasks))
            return { ...state, tasks: updatedTasks };
        case "UPDATED_TASK":
            updatedTasks = state.tasks.map((task)=>{
                return task.id === action.payload.id ? {...task, text:action.payload.text} : task
            })
            localStorage.setItem("tasks", JSON.stringify(updatedTasks))
            return {...state, tasks: updatedTasks}
        default:
            return;
    }
}