// import { useState } from "react";
import _ from "lodash";
import heroImage1 from "../../assets/heroImage1.png";
import heroImage2 from "../../assets/heroImage2.png";
import heroImage3 from "../../assets/heroImage3.png";
import { useState } from "react";
import {
  SlideshowContainer,
  PaginateDot,
  PaginationDots,
  Slide,
  GameDetail
} from "./heroImage.styles";

const HeroImages = () => {
  const slides = [heroImage1, heroImage2, heroImage3, heroImage2, heroImage1];
  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <SlideshowContainer>
      <Slide key={currentIndex}>
        <img src={slides[currentIndex]} alt="heroImage" />
      </Slide>
      <PaginationDots>
        {_.map(_.range(slides.length), (item) => {
          return (
            <PaginateDot
              key={item}
              className={currentIndex === item ? "active-page" : undefined}
              onClick={() => setCurrentIndex(item)}
            >
              <i className="fa-solid fa-circle"></i>
            </PaginateDot>
          );
        })}
      </PaginationDots>
      <GameDetail>
        <p>Chicky Run</p>
        <span>Game Details <i className="fa-solid fa-arrow-right"></i></span>
      </GameDetail>
    </SlideshowContainer>
  );
};

export default HeroImages;
