import { useState, useEffect } from 'react';

const useSlider = (dataLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsGame, setItemsGame] = useState(window.innerWidth <= 768 ? 1 : 2);
  const totalSlides = Math.ceil(dataLength / itemsGame);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const newItemsPerPage = window.innerWidth <= 768 ? 1 : 2;
      setItemsGame(newItemsPerPage);
      setCurrentIndex(prevIndex => Math.floor(prevIndex * itemsGame / newItemsPerPage));
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, [itemsGame]);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSlider = (index) => {
    if (index >= 0 && index < totalSlides) setCurrentIndex(index);
  };

  return {
    currentIndex,
    itemsGame,
    totalSlides,
    nextSlide,
    prevSlide,
    handleSlider,
  };
};

export default useSlider;
