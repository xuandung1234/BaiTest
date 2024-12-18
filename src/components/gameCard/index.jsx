import _ from "lodash";
import PropTypes from "prop-types";
import { GameCardContainer, GameCardDescription, GameCardItem } from "./gameCard.style";

const GameCard = ({ data }) => {
  const renderCardsGame = () =>
    _.map(data, (item) => {
      return (
        <GameCardItem key={item.id}>
          <img src={item.imageBanner} />
          <GameCardDescription>
            <img src={item.image} />
            <div className="description">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
            <div className="button-wrapper">
              <button>View</button>
            </div>
          </GameCardDescription>
        </GameCardItem>
      );
    });

  return <GameCardContainer>{renderCardsGame()}</GameCardContainer>;
};

GameCard.propTypes = {
  data: PropTypes.array,
};

export default GameCard;
