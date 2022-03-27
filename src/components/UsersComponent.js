import React from 'react';
import Table from "react-bootstrap/Table";


const UsersComponent = ({items}) => {

  
    return (
        <>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <td>{JSON.stringify(item.id)}</td>
                  <td>{JSON.stringify(item.name)}</td>
                  <td>{JSON.stringify(item.username)}</td>
                  <td>{JSON.stringify(item.email)}</td>
                  <td>{JSON.stringify(item.address)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </>
    )
  };
  
  export default UsersComponent;