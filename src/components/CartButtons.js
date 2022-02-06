import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { isAuthenticated, loginWithRedirect, logout } = useUserContext();

  return (
    <Wrapper className="cart-wrapper">
      <Link onClick={closeSidebar} to="/cart" className="cart-flex">
        <span className="cart-shop">
          <FaShoppingCart />
          <span className="cart-total">{total_items}</span>
        </span>
      </Link>
      {isAuthenticated ? (
        <button
          type="button"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
          <FaUserMinus />
        </button>
      ) : (
        <button type="button" onClick={loginWithRedirect}>
          Login
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 170px;

  .cart-flex {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;

    .cart-shop {
      position: relative;
      display: flex;
      align-items: center;
      height: 1.6rem;
      margin-left: 0.5rem;
    }

    .cart-total {
      position: absolute;
      top: -15px;
      right: -15px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: var(--clr-primary-5);
      color: var(--clr-white);
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px;
    }
  }

  button {
    background: transparent;
    border: transparent;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;

    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;
