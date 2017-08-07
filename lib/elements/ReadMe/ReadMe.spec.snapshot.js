/* global test, expect */

import React from "react";
import ReadMe from "./index";
import renderer from "react-test-renderer";

test("ReadMe element renders correctly", () => {
  const element = renderer.create(<ReadMe markdown="# Shiny library" />);
  expect(element.toJSON()).toMatchSnapshot();
});
