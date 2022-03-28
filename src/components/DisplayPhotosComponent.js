import React from 'react';

const DisplayPhotosComponent = ({getImages}) => {
console.log(getImages)
  
    return (
        <>
         {getImages && getImages.map((image)=>{
             return (
                 <>
                 <img src={image.thumbnailUrl} style={{width:"100%"}}/>
                 </>
             )
         }
         )}
        </>
    )
  };
  
  export default DisplayPhotosComponent;