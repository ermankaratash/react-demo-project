import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label, DropdownDivider } from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="My Cart">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
            </Dropdown.Item>
          ))}

          <DropdownDivider />
          <Dropdown.Item as={NavLink} to="/cart">
            Go to Cart
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
