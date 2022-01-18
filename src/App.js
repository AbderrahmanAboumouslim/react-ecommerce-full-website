import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <main>
      <AuthWrapper>
        <Router>
          <Navbar />
          <Sidebar />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/products">
              <ProductsPage />
            </Route>
            <Route
              exact
              path="/products/:id"
              children={<SingleProductPage />}
            />
            <Route path="/cart">
              <CartPage />
            </Route>
            <PrivateRoute exact path="/checkout">
              <CheckoutPage />
            </PrivateRoute>
            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </AuthWrapper>
    </main>
  );
}

export default App;
