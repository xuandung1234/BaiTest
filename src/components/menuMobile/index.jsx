// import { useState } from "react";

import { useState } from "react";
import HomeIcon from "../../assets/icon/home";
import TimelineIcon from "../../assets/icon/timeLine";
import AllGameIcon from "../../assets/icon/allGame";
import SearchIcon from "../../assets/icon/searchIcon";
import FilterIcon from "../../assets/icon/filter";
import _ from "lodash";
import { SideMenuMobile } from "./menuMobile.styles";

const MENU_ITEMS = [
  "Games Home",
  "Timeline",
  "All Games",
  "Search",
  "Filter"
];

const MenuMobile = () => {
  const [selected, setSelected] = useState("All Games");

  const icons = {
    'Games Home': HomeIcon,
    'Timeline': TimelineIcon,
    'Search': SearchIcon,
    'Filter': FilterIcon,
  };
  
  const getIcon = (item) => {
    const IconComponent = icons[item] || AllGameIcon;
    return <IconComponent color={selected === item ? 'black' : '#CCCCCC'} />;
  };

  const menuMobileItems = () =>
    _.map(MENU_ITEMS, (item) => {
      return (
        <div
          key={item}
          className={`${item === selected ? "active-item" : ""} ${item === 'Filter' && 'border-filter'}`}
          onClick={() => setSelected(item)}
        >
          {getIcon(item)}
          {item}
        </div>
      );
    });

  return (
    <SideMenuMobile>
      {menuMobileItems()}
    </SideMenuMobile>
  );
};

export default MenuMobile;
