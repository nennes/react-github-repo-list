/* global test, expect */

import React from "react";
import Url from "./index";
import renderer from "react-test-renderer";

test("Url element renders correctly", () => {
  const element = renderer.create(<Url url="http://www.example.com" />);
  expect(element.toJSON()).toMatchSnapshot();
});
