import React from 'react';
import Table from "react-bootstrap/Table";


const UsersComponent = ({items}) => {

    console.log("address",items)

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
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>

            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address?.street}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{JSON.stringify(item.company)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </>
    )
  };
  
  export default UsersComponent;