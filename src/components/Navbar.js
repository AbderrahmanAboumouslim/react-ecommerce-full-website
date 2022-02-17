import React from "react";
import styled from "styled-components";
// import logo from "../assets/logo.svg";
import logop from "../assets/logop.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { isAuthenticated } = useUserContext();
  return (
    <NavWrapper>
      <article>
        <div className="nav-small-screen">
          <Link to="/">
            <img src={logop} alt="logo" />
          </Link>
          <FaBars onClick={openSidebar} className="nav-toggle" />
        </div>
        <ul className="nav-big-screen">
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            );
          })}
          {isAuthenticated && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </article>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;

  article {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-small-screen {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 180px;
      margin-left: -10px;
    }

    .nav-toggle {
      cursor: pointer;
      font-size: 2rem;
      color: var(--clr-primary-5);
    }
  }

  .nav-big-screen {
    display: none;
  }

  .cart-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    article {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      .nav-big-screen {
        display: flex;
        justify-content: center;

        li {
          margin: 0 0.5rem;
        }

        a {
          color: var(--clr-grey-3);
          font-size: 1rem;
          letter-spacing: var(--spacing);
          padding: 0.5rem;
          &:hover {
            border-bottom: 2px solid var(--clr-primary-7);
          }
        }
      }
      .cart-wrapper {
        display: grid;
      }
    }
  }
`;

export default Nav;
