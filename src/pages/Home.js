import React from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
// import ListGroup from "react-bootstrap/ListGroup";
// import CloseButton from "react-bootstrap/CloseButton";
import AddTodo from "./AddTodo";

const Home = ({ newtasks}) => {


  return (
    <>
      <div>
        <p>display To do List</p>
      </div>

      <div style={{ maxWidth: "700px", margin: "0 auto", marginTop: "50px" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Assigned To</th>
              <th>Due Data</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {newtasks &&
              newtasks.map((newtask, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{newtask.taskname}</td>
                    <td>{newtask.assignedto}</td>
                    <td>{newtask.duedate}</td>
                    <td>{newtask.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
