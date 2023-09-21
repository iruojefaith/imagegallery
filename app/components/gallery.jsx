"use client";
import { useContext, useEffect, useState } from "react";
import { Header } from "./Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./DragAndDrop";
import { AuthContext } from "./AuthProvider";
import { TouchBackend } from "react-dnd-touch-backend";
import { dataItems } from "./data.js";

const Gallery = () => {
  const [filterImages, setFilteredImages] = useState(dataItems);
  const { loading, setLoading } = useContext(AuthContext);
  const { isMobile, setIsMobile } = useState(true);
  const { searchQuery } = useContext(AuthContext);

  useEffect(() => {
    const handleSearch = () => {
      setLoading(true);
      console.log(searchQuery);
      if (searchQuery.trim() === "") {
        setFilteredImages(dataItems);
      } else {
        const matchingImages = filterImages.filter((item) => {
          return item.img.toLowerCase().includes(searchQuery.toLowerCase());
        });
        console.log(filterImages.img);
        setFilteredImages(matchingImages);
        setLoading(false);
      }
    };
    handleSearch();
  }, [searchQuery]);

  return (
    <>
      <Header />
      {!isMobile && (
        <DndProvider backend={HTML5Backend}>
          <Container
            filterImages={filterImages}
            setFilteredImages={setFilteredImages}
          />
        </DndProvider>
      )}
      {isMobile && (
        <DndProvider backend={TouchBackend}>
          <Container
            filterImages={filterImages}
            setFilteredImages={setFilteredImages}
          />
        </DndProvider>
      )}
    </>
  );
};

export default Gallery;
