import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click me" />);
  expect(getByTestId('button')).toHaveTextContent("Click me");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Save" />);
  expect(getByTestId('button')).toHaveTextContent("Save");
});

