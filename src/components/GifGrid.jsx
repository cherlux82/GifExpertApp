import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }


  useEffect(() => {
    getImages(category);
  }, [])
  
 

  return (
    <div>
      <h3>{category}</h3>
   
   <ol>
    {
     images.map( (image) => {
       return <li key={image.id}>{image.title}</li>
     })
    }
   </ol>
    </div>
  );
};
