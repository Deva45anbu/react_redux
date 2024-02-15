import { useState } from "react"
import { Row, Col, Button, Container, Form, InputGroup } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addTaskToList } from "../Slices/TaskSlices"


export const AddTask = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()

    const descriptionValueChange = (e) => {
        setDescription(e.target.value)
    }

    const titleValueChange = (e) => {
        setTitle(e.target.value)
    }

    const addTask = (e) => {
        // e.preventDefault()
        console.log({ title, description })
        dispatch(addTaskToList({ title, description }))
        setDescription("")
        setTitle("")

    }


    const resetDetails = () => {
        // e.preventDefault()
        setDescription("")
        setTitle("")


        // dispa
    }






    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the task name" value={title} onChange={(e) => titleValueChange(e)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter the task description" value={description} onChange={(e) => descriptionValueChange(e)}></Form.Control>
                        </Form.Group>
                        <div className="text-end">
                            <Button className="mx-2" variant="primary" type="submit" onClick={(e) => addTask(e)}> Add Task</Button>
                            <Button className="mx-2" variant="primary" onClick={() => {
                                resetDetails()
                            }}> Clear</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
