import {Form, Button} from 'react-bootstrap'

export default function ToDo() {

    const tasks = ["example 1", "example 2", "example 3"];


    return (
        <div className="todo-container bg-light">
            <div className="todo bg-dark">
                <h1 className='text-primary'>Whats going on?</h1>
                <div className="input-container">
                    <Form.Control size="lg" type="text" placeholder="Go to the bank" />
                    <div className="d-grid gap-2">
                        <Button variant="warning" size="lg">Submit</Button>
                    </div>
                </div>
                <div className="tasks-container">
                    {tasks.map((task,i)=>{
                        return(
                            <div className='tasks' key={i}>
                                <div className='task-list'>
                                    <p className='text-light h5'>{task}</p>
                                </div>
                                
                                <div className='btn-container'>
                                    <Button variant="success">Success</Button>
                                    <Button variant="danger">Delete</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}