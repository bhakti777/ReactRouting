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
                  <td>{JSON.stringify(item.postId)}</td>
                  <td>{JSON.stringify(item.id)}</td>
                  <td>{JSON.stringify(item.name)}</td>
                  <td>{JSON.stringify(item.email)}</td>
                  <td>{JSON.stringify(item.body)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </>
    )
  };
  
  export default CommentsComponent;