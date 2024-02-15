import { Row, Col, Table, Button } from "react-bootstrap"
import MyVerticallyCenteredModal from "./UpdateTask"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeTaskFromList, setSelectedTask } from "../Slices/TaskSlices"


const Taskdetails = () => {
    const { taskslist } = useSelector((state) => state.tasks)
    // console.log("tasklist",taskslist)

    const dispatch=useDispatch()

    const editTask = (task) => {
        console.log("edit Task", task);
        setModalShow(true)
        dispatch(setSelectedTask(task))
    }

    const deleteTask = (task) => {
        console.log("delete Task")
        dispatch(removeTaskFromList(task))

    }
    const [modalShow, setModalShow] = useState(false)
    return (
        <Row className="justify-content-md-center text-center">
            <Col xs lg="6">
                <h3>Task Details</h3>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        taskslist&&
                        taskslist.map((task,index)=>{
                            return(
                            <tr key={task.id}>
                            <td>{index+1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <Button variant="primary" className="mx-2" onClick={(e) => { editTask(task) }}><i className="bi bi-pencil"></i>
                                </Button>
                                <Button variant="primary" className="mx-2" onClick={() => { deleteTask(task) }} ><i className="bi bi-trash3-fill"></i></Button>

                            </td>
                        </tr>)

                        })
                        
                        // :<></>
                        }
                    </tbody>
                </Table>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Col>
        </Row>
    )
}

export default Taskdetails