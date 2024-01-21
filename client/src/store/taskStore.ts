import axios from 'axios'
import {create} from 'zustand'


type Task = {
    name:string
    completed:boolean
}

type TaskStore = {
    tasks:Task[],
    fetchTasks: () => Promise<void>;
    deleteTask: (id:string) => Promise<void>;
}


export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],

    fetchTasks: async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/tasks');
            const tasks = response.data.tasks;
            set({ tasks });
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    },

    deleteTask: async (id:string) => {
        try {
              await axios.delete(`http://localhost:3000/api/tasks/${id}`);
              const response = await axios.get('http://localhost:3000/api/tasks');
              const tasks = response.data.tasks;
              set({ tasks });
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    }
}))