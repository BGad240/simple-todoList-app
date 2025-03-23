import React from 'react'
import { useState, useReducer } from 'react'
import Task from './Task'
import { reducer, initialState } from "../utils/reducer"
import { Plus } from "lucide-react"
import { motion } from "framer-motion";


const Todolist = () => {

  const [state, dispatch] = useReducer(reducer, initialState)


  // const [task, setTask] = useState("")
  // const [tasks, setTasks] = useState([])


  // console.log(task)

  // const addTask = () => {
  //   if (task.trim() === "") {
  //     return alert("task is empty")
  //   }
  //   const newTask = { id: Date.now(), text: task }
  //   setTasks([...tasks, newTask])
  //   setTask("")
  // }


  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vh", y: "-50%" }}
        animate={{ opacity: 1, x: "-50%", y: "-50%" }}
        transition={{ duration: 1, type: "spring", stiffness: 130 }}
        className="
    absolute top-[50%] left-[50%] 
    w-[500px] min-h-[500px] 
    rounded-[10px] bg-[#E3F2FD57] p-5 shadow-lg
  "
      >

        <form action="" onSubmit={(e) => e.preventDefault()}
          className='
          flex items-center
          w-[90%]
          mx-auto my-[20px] py-[10px] pl-[10px]
          rounded-[10px]
          bg-slate-100
          box-content
          relative
          '
        >
          <input
            type="text"
            value={state.task}
            onChange={(e) => dispatch({ type: "SET_TASK", payload: e.target.value })}
            className='mr-[40px] bg-transparent focus:border-none focus:outline-none flex-1 '
            placeholder='add new task'
          />
          <div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{scale: 1.1}}
              className=' bg-slate-300 absolute right-[-2px] top-[0] p-[10px] px-[20px] rounded-[10px]'
              onClick={() => dispatch({ type: "ADD_TASK" })}><Plus className='text-[#fff]'/></motion.button>
          </div>
        </form>
        <ul>
          {
            state.tasks.map((t) => {
              console.log(t.id)
              return (
                <Task key={t.id} task={t} dispatch={dispatch} />
              )
            })
          }
        </ul>
      </motion.div>
    </>
  )
}

export default Todolist