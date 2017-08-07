/* global test, expect */

import React from "react";
import Title from "./index";
import renderer from "react-test-renderer";

test("Title element renders correctly", () => {
  const element = renderer.create(
    <Title title="super-interesting-repo-title" />
  );
  expect(element.toJSON()).toMatchSnapshot();
});
