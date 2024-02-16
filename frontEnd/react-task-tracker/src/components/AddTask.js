import { useState } from "react"

const AddTask = () => {
    const [text, setTex] = useState('')
    const [day,setDay] = useState('')
    const [details, setDetails] = useState('')
    const [reminder, setReminder] = useState(false)

  return (

    <form className='add-form' >
        <div className="form-control" >
            <label>Task</label>
            <input type="text" placeholder="Add Task" />
        </div>
        <div className="form-control" >
            <label>Date and Time </label>
            <input type="text" placeholder="Add Task" />
        </div>
        <div className="form-control" >
            <label>Details</label>
            <input type="text" placeholder="Add Date and Time" />
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
