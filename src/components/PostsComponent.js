import React from 'react';
import Table from "react-bootstrap/Table";


const PostsComponent = ({items}) => {

  
    return (
        <>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>User-Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        </>
    )
  };
  
  export default PostsComponent;