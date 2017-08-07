/* global test, expect */

import React from "react";
import Name from "./index";
import renderer from "react-test-renderer";

test("Name element renders correctly", () => {
  const props = {
    name: "react-component-library",
    url: "http://www.test.com"
  };
  const element = renderer.create(<Name {...props} />);
  expect(element.toJSON()).toMatchSnapshot();
});
