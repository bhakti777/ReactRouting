import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const TestUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <Button onClick={() => setResourceType("posts")}>Posts</Button>
        <Button onClick={() => setResourceType("users")}>Users</Button>
        <Button onClick={() => setResourceType("comments")}>Comments</Button>
      </div>

      {/* <h1>{resourceType}</h1> */}
      <div>
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
            {items.map((item,index) => {
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
      </div>



      <div>
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
      </div>

      <div>
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
      </div>
    </>
  );
};

export default TestUseEffect;
