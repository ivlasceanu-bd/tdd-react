import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Item from '../components/Item';
import ItemsList from '../components/ItemsList';

// actual test code :)
test("Item component receives props and renders text", () => {
  // render the component with text prop
  const { getByTestId } = render(<Item text="This is some mock text"/>);

  // expect the Item component to render correct text
  expect(getByTestId("item-text")).toHaveTextContent("This is some mock text");
});