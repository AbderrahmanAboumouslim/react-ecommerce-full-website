import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sort === "name-z") {
        tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { query, company, category, color, shipping, price } =
        state.filters;
      let newProducts = [...all_products];
      // Filtering
      // query
      if (query !== "") {
        newProducts = newProducts.filter((p) => {
          return p.name.toLowerCase().startsWith(query);
        });
      }
      // category
      if (category !== "all") {
        newProducts = newProducts.filter((p) => {
          return p.category === category;
        });
      }
      // company
      if (company !== "all") {
        newProducts = newProducts.filter((p) => p.company === company);
      }
      // colors
      if (color !== "all") {
        newProducts = newProducts.filter((p) => {
          return p.colors.find((c) => c === color);
        });
      }
      // price
      if (price) {
        newProducts = newProducts.filter((p) => p.price <= price);
      }
      // shipping
      if (shipping) {
        newProducts = newProducts.filter((p) => p.shipping === true);
      }

      return { ...state, filtered_products: newProducts };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          query: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
export default filter_reducer;
