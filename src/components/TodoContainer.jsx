import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer() 
{
    const [activityArr, setActivityArr]=useState([
        {
            id:1,
            activity:"Learn something unfamiliar, like coding, cooking, or drawing."
        },
        {
            id:2,
            activity:"Push your physical limits with a workout or yoga session" 
        },
        {
            id:3,
            activity:"Choose a challenging task you've been avoiding and complete it" 
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">

           <AddTodoForm setActivityArr={setActivityArr} activityArr={activityArr} />
           <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
            
        </div>
        </div>
    )
}
export default TodoContainer