/* global test, expect */

import React from "react";
import LastUpdated from "./index";
import renderer from "react-test-renderer";

test("LastUpdated element renders correctly", () => {
  const element = renderer.create(
    <LastUpdated timestamp="2015-12-13T13:36:22Z" />
  );
  expect(element.toJSON()).toMatchSnapshot();
});
