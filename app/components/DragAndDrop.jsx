"use client";

import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
import { useContext, useRef } from "react";
import { AuthContext } from "./AuthProvider";

const Image = ({ image, index, moveImage }) => {
  const { logged, toggleModal, loading } = useContext(AuthContext);
  console.log(loading);
  const ImageRef = useRef(null);
  const [, drop] = useDrop({
    accept: "Image",
    hover(item) {
      if (!ImageRef.current) {
        return;
      }

      const dragImageIndex = item.index;
      const hoveredIndex = index;
      if (dragImageIndex === hoveredIndex) {
        return;
      }

      moveImage(dragImageIndex, hoveredIndex);
      item.index = hoveredIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Image",
    item: { id: image.id, index },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  const handleDrag = (e) => {
    if (!logged) {
      e.preventDefault();
      toggleModal();
    }
  };

  drag(drop(ImageRef));
  return (
    <img
      ref={ImageRef}
      onDragStart={handleDrag}
      alt={image.id}
      src={image.img}
      className='w-[100%] border rounded-lg block my-5 '
    />
  );
};

const Container = ({ filterImages, setFilteredImages }) => {
  const RenderImage = (image, index) => {
    return image ? (
      <Image
        image={image}
        index={index}
        key={image.id}
        moveImage={moveImage}
        className='my-5'
      />
    ) : null;
  };

  const moveImage = (dragImageIndex, hoveredIndex) => {
    const dragImage = filterImages[dragImageIndex];
    setFilteredImages(
      update(filterImages, {
        $splice: [
          [dragImageIndex, 1],
          [hoveredIndex, 0, dragImage],
        ],
      })
    );
  };
  return (
    <div className='gallery gap-2 md:gap-4 my-[5px] px-[12px] '>
      {filterImages.map(RenderImage)}
    </div>
  );
};

export default Container;
