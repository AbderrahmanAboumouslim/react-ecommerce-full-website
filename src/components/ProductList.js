import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h4>Oops! we do not have this sort of products...</h4>;
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>productsList</GridView>;
};

export default ProductList;
