import React from 'react'
import { Trash2, SquareCheckBig, Pencil, Save, Square } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Input } from 'postcss'

const Task = ({ task, dispatch }) => {

    const [edited, setEdited] = useState(false)
    const [editTask, setEditTask] = useState(task.text)
    const [completed, setIsCompleted] = useState(false)

    console.log(edited)

    const handleEdit = () => {
        if (editTask.trim() === "") {
            alert("Please enter a task")
            return
        }
        dispatch({ type: "UPDATED_TASK", payload: { id: task.id, text: editTask } })
        setEdited(false)
    }

    return (
        <motion.li
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='flex justify-between items-center bg-white p-3 rounded-md shadow-md my-2'
        >
            <div className='flex items-center gap-2 flex-1'>
                {
                    completed?
                        (
                            <motion.button
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                                className='max-w-fit text-blue-400'
                                onClick={()=>setIsCompleted(false)}

                            >
                                <SquareCheckBig className='w-[20px]' />
                            </motion.button>

                        )
                        :
                        (
                            <motion.button
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                                className='max-w-fit'
                                onClick={()=>setIsCompleted(true)}
                            >
                                <Square className='w-[20px]' />
                            </motion.button>
                        )
                }
                {
                    edited ?
                        (<input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />)
                        :
                        (
                            <p
                            className={
                                completed ? 'line-through text-gray-400' : 'text-gray-600'
                            }
                            >{task.text}</p>
                        )
                }

            </div>
            <div>
                {
                    edited ?
                        (<motion.button
                            whileTap={{ scale: .9 }}
                            whileHover={{ scale: 1.2 }}

                            className='mr-[2px] text-green-500'
                            onClick={handleEdit}
                        >

                            <Save size={20} />
                        </motion.button>) : (
                            <motion.button

                                whileTap={{ scale: .9 }}
                                whileHover={{ scale: 1.2 }}
                                className='mr-[2px] text-slate-500'
                                onClick={() => setEdited(true)}
                            >

                                <Pencil size={20} />
                            </motion.button>)

                }
                <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className='max-w-fit text-red-500 hover:text-red-600'
                    onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
                >

                    <Trash2 size={20} />
                </motion.button>
            </div>
        </motion.li >
    )
}

export default Task