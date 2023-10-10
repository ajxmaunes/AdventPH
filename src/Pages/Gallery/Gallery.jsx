import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
import './Gallery.css'

// Imported layout
import MainLayout from "../Layout/Layout";

function Gallery() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item)=> item.title))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.title === itemData);
    setData(filterData);
  }

  return (
    <MainLayout>
    <div className="App">
      <div className="galleryWrapper">
        <span className="secTitle">
          Gallery
        </span>

        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div key={item.id} className="galleryItem"><img src={item.image} alt=""/></div>)
          }
        </div>
      </div>
    </div>
    </MainLayout>
  );
}

export default Gallery;