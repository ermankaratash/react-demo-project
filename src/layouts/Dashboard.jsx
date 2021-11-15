import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CartDetail from "../pages/CartDetail";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:name" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
