import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

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

// Snapshot testing
it("matches snapshot 1", () => {
  // .create() creates a snapshot and .toJSON() convert it to a virtual DOM object 
  const tree = renderer.create(<Button label="Save" />).toJSON();
  expect(tree).toMatchSnapshot();
  // creates a folder called snapshot, where there is a file called button.test.js.snap and compares the new snapshot with the original
})

it("matches snapshot 2", () => {
  const tree = renderer.create(<Button label="Click me" />).toJSON();
  expect(tree).toMatchSnapshot();
})
