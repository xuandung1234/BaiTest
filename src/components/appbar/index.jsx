import { useState } from "react";
import _ from "lodash";
import { AppbarWrapper, AppbarContent, MenuWrapper } from "./appbar.style";
import { UseMediaQuery } from "../../hooks";
import logo from "../../assets/logo.svg";

const MENU_ITEMS = [
  "home",
  "games",
  "news",
  "math",
  "company",
  "events",
  "partners",
];

const Appbar = () => {
  const { isTabletOrMobile } = UseMediaQuery();
  const [selected, setSelected] = useState("games");

  const menuDesktopItems = () =>
    _.map(MENU_ITEMS, (item) => {
      return (
        <div
          key={item}
          className={item === selected ? "active-item" : ""}
          onClick={() => setSelected(item)}
        >
          {item}
        </div>
      );
    });

  return (
    <AppbarWrapper>
      <AppbarContent>
        <img src={logo} />
        <MenuWrapper>
          {!isTabletOrMobile ? (
            menuDesktopItems()
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </MenuWrapper>
      </AppbarContent>
    </AppbarWrapper>
  );
};

export default Appbar;
