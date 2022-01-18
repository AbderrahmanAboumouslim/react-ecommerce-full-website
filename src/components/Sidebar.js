import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { isAuthenticated } = useUserContext();
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <header>
          <img src={logo} alt="logo" />
          <FaTimes onClick={closeSidebar} className="close-btn" />
        </header>
        <ul>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link onClick={closeSidebar} to={item.url}>
                  {item.text}
                </Link>
              </li>
            );
          })}
          {isAuthenticated && (
            <li>
              <Link onClick={closeSidebar} to="checkout">
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    img {
      justify-self: center;
      height: 45px;
    }

    .close-btn {
      font-size: 2rem;
      background: transparent;
      color: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
    }
    .close-btn:hover {
      color: var(--clr-red-light);
    }
  }

  ul {
    li {
      margin: 1rem 0.5rem;
    }

    a {
      display: block;
      color: var(--clr-grey-3);
      font-size: 1rem;
      letter-spacing: var(--spacing);
      transition: var(--transition);

      &:hover {
        border-left: 2px solid var(--clr-primary-7);

        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
      }
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transform: translateX(-100%);
    transition: var(--transition);
    z-index: -1;
  }

  .show-sidebar {
    transform: translateX(0);
    z-index: 999;
  }

  .cart-wrapper {
    margin: 3rem auto;
  }
`;

export default Sidebar;
