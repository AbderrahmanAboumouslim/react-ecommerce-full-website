import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, loading: true };
    case GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: true };
    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (item) => item.featured === true
      );
      return {
        ...state,
        loading: false,
        products: action.payload,
        featured_products,
      };
    case GET_SINGLE_PRODUCT_BEGIN:
      return { ...state, single_loading: true, single_error: false };
    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, single_loading: false, single_error: true };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_loading: false,
        single_error: false,
        single_product: action.payload,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
