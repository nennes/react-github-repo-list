/* global test, expect */

import React from "react";
import List from "./index";
import Name from "../Name";
import renderer from "react-test-renderer";

test("List atom renders correctly", () => {
  const props = {
    children: [<div>A child</div>, <Name name="me" url="http://www.test.com" />]
  };

  const component = renderer.create(<List {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
