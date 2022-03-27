import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddTodo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialState={
    taskname: "",
    assignedto: "",
    duedate: "",
    description: ""
  };

const [formState,setFormState]=useState(initialState);
const [newtasks,setNewTasks]=useState([])//to add new row

const handleOnChange=(event)=>{
    setFormState({...formState,[event.target.name]:event.target.value})
}
console.log("TaskDetails=>",formState)


const handleOnSave = () => {
  setNewTasks([...newtasks, formState]);
  setFormState(initialState);
};
console.log(newtasks)



  return (
    <>
      <div style={{ margin: "50px" }}>
        <Button onClick={handleShow}>Add tasks here...</Button>
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Todo Item Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Task Name:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  placeholder="Enter task name"
                  name="taskname"
                  value={formState.taskname}
                  onChange={handleOnChange}
                />
              </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Assigned to:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  placeholder=""
                  name="assignedto"
                  value={formState.assignedto}
                  onChange={handleOnChange}
                />
              </Col>
              </Form.Group>


              <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Due date:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="date"
                  name="duedate"
                  value={formState.duedate}
                  onChange={handleOnChange}
                />
              </Col>
              </Form.Group>


              <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Description:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="textarea"
                  placeholder="Write description"
                  name="description"
                  value={formState.description}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleOnSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AddTodo;
