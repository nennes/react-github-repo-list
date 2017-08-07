/* global test, expect */

import React from "react";
import Title from "./index";
import renderer from "react-test-renderer";

test("Title element renders correctly", () => {
  const element = renderer.create(
    <Title title="Super cool library for React" />
  );
  expect(element.toJSON()).toMatchSnapshot();
});
