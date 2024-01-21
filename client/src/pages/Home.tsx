
import TaskComponent from '@/components/TaskComponent'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { createTask } from '@/lib/createTask'
import { useTaskStore } from '@/store/taskStore'

type Props = {}

type Task ={
_id?:string,
name:string,
completed:boolean
}

export default function Home({}: Props) {

    // const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')
    const {fetchTasks, tasks} = useTaskStore()


    useEffect(  () => {
        // const fetchData = async () => {

        //   try {
        //     const res = await axios.get('http://localhost:3000/api/tasks')
        //     if(!res) return console.log('Axios Error')
        //     const taskData = res.data
        //     setTasks(taskData.tasks)
            
        //   } catch (error) {
        //     console.error(error)
        //   }
        // }


        // fetchData()
        fetchTasks()

    }, [])

      console.log(tasks)
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      // const newTaskId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1; // Generate a unique ID
      // setTasks([...tasks, {id:newTaskId, title: inputValue, completed: false}])

        e.preventDefault()

        const newTask = {name:inputValue, completed:false}
        const res = await createTask(newTask)
        console.log(res)
        fetchTasks()
        setInputValue('')

        

    }

    

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] gap-5'>

      {/* Component for form */}
      <div className='mb-10 shadow-lg'>
        <Card className='text-center w-[35rem]'>
          <CardHeader>
            <CardTitle>Task Manager</CardTitle>
          </CardHeader>
          <CardContent >
            <form action="" className='w-full flex gap-2' onSubmit={handleSubmit}>
              <Input placeholder='e.g. wash dishes' className='bg-gray-500/5' value={inputValue} onChange={onChangeInput}/>
            <Button type='submit' className='w-[12rem] text-base bg-indigo-800'>Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Task component */}

      <div className='flex flex-col gap-5'>
        {tasks.map((task: Task) => (
            <TaskComponent name={task.name} completed={task.completed} key={task._id} id={task._id!}/>
        ))}
      </div>

    </div>
  )
}