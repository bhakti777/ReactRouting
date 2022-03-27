import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CommentsComponent from "../components/CommentsComponent";
import PostsComponent from "../components/PostsComponent";
import UsersComponent from "../components/UsersComponent";

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

      <div>
       {resourceType=="posts" && <PostsComponent items={items}/>}
      </div>


      <div>
      {resourceType=="users" && <UsersComponent items={items}/>}
      </div>

      <div>
        {resourceType=="comments" && <CommentsComponent items={items}/>}
      </div>
    </>
  );
};

export default TestUseEffect;
