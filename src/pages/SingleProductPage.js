import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { fetchSingleProduct, single_loading, single_error, single_product } =
    useProductsContext();
  const { id } = useParams();
  const history = useHistory();
  const { images, name, price, description, stock, company, stars, reviews } =
    single_product;
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (single_error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [single_error]);

  if (single_loading) {
    return <Loading />;
  }
  if (single_error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <PageHero roadMap={name} products />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <article>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h4 className="price">{formatPrice(price)}</h4>
            <p className="desc">{description}</p>
            <p className="info">
              <span>available : </span>
              {stock > 0 ? "in stock" : "out of stock"}
            </p>
            <p className="info">
              <span>sku : </span>
              {id}
            </p>
            <p className="info">
              <span>brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={single_product} />}
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: uppercase;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
