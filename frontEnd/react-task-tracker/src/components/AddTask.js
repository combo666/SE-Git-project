import { useState } from "react"

const AddTask = () => {
    const [text, setText] = useState('')
    const [day,setDay] = useState('')
    const [details, setDetails] = useState('')
    const [reminder, setReminder] = useState(false)

  return (

    <form className='add-form' >
        <div className="form-control" >
            <label>Task</label>
            <input type="text" placeholder="Add Task" value= {text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control" >
            <label>Date and Time </label>
            <input type="text" placeholder="Add Task" value= {day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control" >
            <label>Details</label>
            <input type="text" placeholder="Add Date and Time" value= {reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <div className="form-control form-control-check" >
            <label>Remainder</label>
            <input type="checkbox"  />
        </div>

        <input type="submit" value='Save Task' className="btn btn-block" />
    
    </form>
  )
}

export default AddTask
