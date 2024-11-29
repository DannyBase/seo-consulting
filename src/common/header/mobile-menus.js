import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");
  const router = useRouter(); // Get the current route

  // Open Mobile Menu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  // Open Sub Mobile Menu
  const openSubMobileMenu = (s_menu) => {
    if (subMenu === s_menu) {
      setSubMenu("");
    } else {
      setSubMenu(s_menu);
    }
  };

  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
          <li key={i}>
            {!menu.has_dropdown && (
              <Link href={menu.link} className={router.pathname === menu.link ? "active-link" : ""}>
                {menu.title}
              </Link>
            )}

            {menu.has_dropdown && !menu.mega_menu && (
              <div className="has-dropdown">
                <Link href={menu.link} className={router.pathname === menu.link ? "active-link" : ""}>
                  {menu.title}
                </Link>
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menus.map((sub, i) => (
                    <li key={i}>
                      <Link href={sub.link} className={router.pathname === sub.link ? "active-link" : ""}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            )}

            {menu.mega_menu && (
              <div className="has-dropdown has-mega-menu">
                <Link href={menu.link} className={router.pathname === menu.link ? "active-link" : ""}>
                  {menu.title}
                </Link>
                <ul
                  className="mega-menu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.mega_menus.map((mega_m, i) => (
                    <li key={i}>
                      <Link href={mega_m.link} className={router.pathname === mega_m.link ? "active-link" : ""}>
                        {mega_m.title}
                      </Link>
                      <ul
                        style={{
                          display: subMenu === mega_m.title ? "block" : "none",
                        }}
                      >
                        {mega_m.layout.map((sub_m, i) => (
                          <li key={i}>
                            <Link href={sub_m.link} className={router.pathname === sub_m.link ? "active-link" : ""}>
                              {sub_m.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <a
                        className={`mean-expand ${subMenu === mega_m.title ? "mean-clicked" : ""}`}
                        onClick={() => openSubMobileMenu(mega_m.title)}
                        style={{ fontSize: "18px", cursor: "pointer" }}
                      >
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
