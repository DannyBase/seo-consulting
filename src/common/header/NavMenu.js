import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import menu_data from "./menu-data";

const NavMenu = () => {
  const router = useRouter(); // Get the current route

  return (
    <ul className="main-menu__list">
      {menu_data.map((item, i) => (
        <li
          key={i}
          className={`${
            item.has_dropdown ? "menu-item-has-children" : ""
          } ${router.pathname === item.link ? "active" : ""}`}
        >
          <Link href={item.link}>
            <span className={router.pathname === item.link ? "active-link" : ""}>
              {item.title}
            </span>
          </Link>
          {item.sub_menus && (
            <ul className="sub-menu">
              {item.sub_menus.map((sub_item, sub_i) => (
                <li
                  key={sub_i}
                  className={`${
                    router.pathname === sub_item.link ? "active" : ""
                  }`}
                >
                  <Link href={sub_item.link}>
                    <span
                      className={
                        router.pathname === sub_item.link ? "active-link" : ""
                      }
                    >
                      {sub_item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
