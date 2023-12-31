import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App </h1>

      <AddCategory onNewCategory={onAddCategory} />
   
     
     {
      categories.map( (category) => {
        return <GifGrid key={category} category={category} />
      })
     }
    </>
  );
};
