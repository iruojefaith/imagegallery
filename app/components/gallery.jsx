"use client";
import { useState } from "react";
import Search from "./Search";

const Gallery = ({ data }) => {
  const [filterImages, setFilteredImages] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredImages(data);
    } else {
      const matchingImages = data.filter((data) =>
        data.img.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(data);
      setFilteredImages(matchingImages);
    }
  };
  return (
    <>
      <Search
        handleSearch={handleSearch}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />

      <div className='gallery gap-2 md:gap-4 py-0 px-[12px]'>
        {data.map((image, id) => (
          <div className='image' key={id}>
            <img
              src={image.img}
              alt={image.title}
              key={id}
              className='w-[100%] border rounded-lg block '
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
