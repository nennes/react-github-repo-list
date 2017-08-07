/* global test, expect */

import React from "react";
import Name from "./index";
import renderer from "react-test-renderer";

test("Name element renders correctly", () => {
  const element = renderer.create(<Name name="react-component-library" />);
  expect(element.toJSON()).toMatchSnapshot();
});
