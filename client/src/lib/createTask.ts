import axios from "axios"

type Task = {
    name:string
    completed:boolean
}

export const createTask = async (task:Task) => {

    try {
        const res = await axios.post('http://localhost:3000/api/tasks', task)

        return res.data
        
    } catch (error) {
        console.error(error)
    }
}