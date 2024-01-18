
import TaskComponent from '@/components/TaskComponent'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { taskData } from '../../dummy-data'

type Props = {}

type Task ={
id:number,
title:string,
completed:boolean
}

export default function Home({}: Props) {

    const [tasks, setTasks] = useState(taskData)
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newTaskId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1; // Generate a unique ID
        
        setTasks([...tasks, {id:newTaskId, title: inputValue, completed: false}])
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
            <TaskComponent title={task.title} completed={task.completed} key={task.id} id={task.id}/>
        ))}
      </div>

    </div>
  )
}