import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

export default function MyVerticallyCenteredModal(props) {

    const { selectedTask } = useSelector((state) =>
        state.tasks
    )

    useEffect(()=>{
        setTitle(selectedTask.title)
        setDescription(selectedTask.description)

    },[selectedTask])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [id, setId] = useState(0)

    const descriptionValueChange = (e) => {
        setDescription(e.target.value)
    }

    const titleValueChange = (e) => {
        setTitle(e.target.value)
    }


    const updateTask = (e) => {
        console.log("update Task")

    }
    // console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter the task name" value={title} onChange={(e) => titleValueChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter the task description" value={description} onChange={(e) => descriptionValueChange(e)}></Form.Control>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}> Close</Button>
                <Button className="mx-2" variant="primary"
                    onClick={(e) => {
                        updateTask(e);
                    }
                    }> Update Task</Button>
            </Modal.Footer>
        </Modal>
    );
}

