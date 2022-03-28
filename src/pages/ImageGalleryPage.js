import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import DisplayPhotosComponent from "../components/DisplayPhotosComponent";
import HeaderPhotosComponent from "../components/HeaderPhotosComponent";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const ImageGalleryPage = () => {
  const [getImages, setGetImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setGetImages(json));
  }, [getImages]);

  return (
    <>
      <div>
        <HeaderPhotosComponent />
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"15px",marginTop:"20px",padding:"15px"}}>
            <DisplayPhotosComponent getImages={getImages} />
      </div>
    </>
  );
};

export default ImageGalleryPage;
