import React from 'react';
import Table from "react-bootstrap/Table";


const CommentsComponent = ({items}) => {

  
    return (
        <>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>Post-Id</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.postId}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </>
    )
  };
  
  export default CommentsComponent;