import "./App.css";
import {
  Appbar,
  CategoryCard,
  SideMenu,
  MenuMobile,
  GameCard,
  Footer,
  HeroImages,
} from "./components";
import { DATA_CATEGORY, DATA_GAME } from "./utils/constants";
import { AppContainer, AppContent, Content, LoadMoreButtonContainer, PaginateDot, PaginationArrows, PaginationDotsContainer, ReleaseButtonContainer, TitlePagination } from "./app.styles";
import { useSlider } from "./hooks";
import _ from "lodash";

const App = () => {

  const {
    currentIndex: currentIndexGame,
    itemsGame: itemsGames,
    totalSlides: totalSlidesGame,
    nextSlide: nextSlideGame,
    prevSlide: prevSlideGame,
    handleSlider: handleSliderGame,
  } = useSlider(DATA_GAME.length);

  const {
    currentIndex: currentIndexCategoryGame,
    itemsGame: itemsCategoryGames,
    totalSlides: totalSlidesCategoryGame,
    nextSlide: nextSlideCategoryGame,
    prevSlide: prevSlideCategoryGame,
    handleSlider: handleSliderCategoryGame,
  } = useSlider(DATA_CATEGORY.length);

  return (
    <AppContainer>
      <AppContent>
        <Appbar />
        <HeroImages />
        <Content>
          <SideMenu />
          <MenuMobile />
          <div>
            <div>
              <TitlePagination>
                <p className="title">Hot Game</p>
                <PaginationArrows>
                  <i
                    className={`fa-solid fa-chevron-left ${!currentIndexGame ? "disabled-item" : "active-item"
                      }`}
                    onClick={prevSlideGame}
                  ></i>
                  <i
                    className={`fa-solid fa-chevron-right ${currentIndexGame === totalSlidesGame - 1
                      ? "disabled-item"
                      : "active-item"
                      }`}
                    onClick={nextSlideGame}
                  ></i>
                </PaginationArrows>
                <ReleaseButtonContainer>
                  <button>
                    Release Date AZ
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </ReleaseButtonContainer>
              </TitlePagination>
              <GameCard key={currentIndexGame} data={DATA_GAME.slice(currentIndexGame * itemsGames, currentIndexGame * itemsGames + itemsGames)} />

              <PaginationDotsContainer>
                {_.map(_.range(totalSlidesGame), (_, index) => (
                  <PaginateDot
                    key={index}
                    className={currentIndexGame === index ? "active-page" : undefined}
                    onClick={() => handleSliderGame(index)}
                  >
                    <i className="fa-solid fa-circle"></i>
                  </PaginateDot>
                ))}
              </PaginationDotsContainer>
            </div>

            <div className="category-styles">
              <TitlePagination>
                <p className="title">Hottest Category</p>
                <PaginationArrows>
                  <i
                    className={`fa-solid fa-chevron-left ${!currentIndexCategoryGame ? "disabled-item" : "active-item"
                      }`}
                    onClick={prevSlideCategoryGame}
                  ></i>
                  <i
                    className={`fa-solid fa-chevron-right ${currentIndexCategoryGame === totalSlidesCategoryGame - 1
                      ? "disabled-item"
                      : "active-item"
                      }`}
                    onClick={nextSlideCategoryGame}
                  ></i>
                </PaginationArrows>
              </TitlePagination>
              <CategoryCard key={currentIndexCategoryGame} data={DATA_CATEGORY.slice(currentIndexCategoryGame * itemsCategoryGames, currentIndexCategoryGame * itemsCategoryGames + itemsCategoryGames)} />

              <PaginationDotsContainer>
                {_.map(_.range(totalSlidesCategoryGame), (_, index) => (
                  <PaginateDot
                    key={index}
                    className={currentIndexCategoryGame === index ? "active-page" : undefined}
                    onClick={() => handleSliderCategoryGame(index)}
                  >
                    <i className="fa-solid fa-circle"></i>
                  </PaginateDot>
                ))}
              </PaginationDotsContainer>

            </div>
            <LoadMoreButtonContainer>
              <button>
                Load More
                <i className="fa-solid fa-plus"></i>
              </button>
            </LoadMoreButtonContainer>
          </div>
        </Content>
        <Footer />
      </AppContent>
    </AppContainer>
  );
};

export default App;
