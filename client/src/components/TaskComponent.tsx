import { useTaskStore } from "@/store/taskStore";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
    name: string,
    completed: boolean
    id: string
}



export default function TaskComponent({name, completed, id}: Props) {

  const {deleteTask} = useTaskStore() 

  return (
  
        <div className='w-[35rem] bg-white rounded-lg py-4 px-10 flex justify-between items-center shadow-lg' >
        <p className={`font-semibold ${completed ? 'line-through' : '' }`}>{name}</p>

        {/* Icons */}
        <div className="flex gap-4 items-center justify-center">

         <Link to={`task/${id}`}>
            <FaEdit className="w-4 h-4 text-green-800" onClick={() => console.log('Edit')}/>
         </Link>   
        <FaTrash className="w-3 h-3 text-red-800" onClick={async () => {
          await deleteTask(id)
        }} />
        </div>
    </div>
    
  
    
  )
}