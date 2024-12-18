import { useState } from "react";
import searchIcon from "../../assets/icon/search.svg";
import TimelineIcon from "../../assets/icon/timeLine.jsx";
import AllGameIcon from "../../assets/icon/allGame.jsx";
import _ from "lodash";
import HomeIcon from "../../assets/icon/home.jsx";
import { Input, SideMenuItems, SideMenuWrapper, StyledInput } from "./sideMenu.styles.js";

const MENU_ITEMS = [
  "Games Home",
  "Timeline",
  "All Games",
];

const SideMenu = () => {
  const [selected, setSelected] = useState("Games Home");

  const icons = {
    'Games Home': HomeIcon,
    'Timeline': TimelineIcon,
  };
  
  const getIcon = (item) => {
    const IconComponent = icons[item] || AllGameIcon;
    return <IconComponent color={selected === item ? 'black' : '#CCCCCC'} />;
  };

  const menuDesktopItems = () =>
    _.map(MENU_ITEMS, (item) => {
      return (
        <div
          key={item}
          className={item === selected ? "active-item" : ""}
          onClick={() => setSelected(item)}
        >
          {getIcon(item)}
          {item}
        </div>
      );
    });

  return (
    <SideMenuWrapper>
      <StyledInput>
        <Input
          type="text"
          placeholder="Search"
        />
        <div className="left-icon">
          <img src={searchIcon} />
        </div>
      </StyledInput>
      <SideMenuItems>
        {menuDesktopItems()}
      </SideMenuItems>
    </SideMenuWrapper>
  );
};

export default SideMenu;
