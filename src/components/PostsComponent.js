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
                  <td>{JSON.stringify(item.userId)}</td>
                  <td>{JSON.stringify(item.userId)}</td>
                  <td>{JSON.stringify(item.title)}</td>
                  <td>{JSON.stringify(item.body)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        </>
    )
  };
  
  export default PostsComponent;