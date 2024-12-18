import PropTypes from 'prop-types';
import _ from "lodash";
import { CategoryCardContainer, CategoryCards, CategoryItem } from "./categoryCard.style";

const CategoryCard = ({ data }) => {

  const renderCategoryCard = () =>
    _.map(data, (item) => {
      return (
        <CategoryCards key={item.id}>
          <CategoryItem>
            <img src={item.game1} />
            <div className="image-item">
              <img src={item.game2} />
              <img src={item.game3} />
            </div>
          </CategoryItem>
          <CategoryItem>
            <div className="image-item">
              <img src={item.game4} />
              <img src={item.game5} />
            </div>
            <img src={item.game6} />
          </CategoryItem>
        </CategoryCards>
      );
    });

  return (
    <CategoryCardContainer>
      {renderCategoryCard()}
    </CategoryCardContainer>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.array,
};

export default CategoryCard;
