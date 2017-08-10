/* global test, expect */

import React from "react";
import Repo from "./index";
import renderer from "react-test-renderer";

test("Repo component renders correctly", () => {
  const props = {
    markdown: "# Some markdown",
    name: "repository-name",
    timestamp: "2015-12-13T13:36:22Z",
    title: "Repository title",
    url: "http://www.test.com"
  };
  const component = renderer.create(<Repo {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
