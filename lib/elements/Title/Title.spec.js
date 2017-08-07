import React from "react";
import Title from "./index";
import { shallow } from "enzyme";

test("Title element picks up the props correctly", () => {
  const title = "react-component-library";
  const display = shallow(<Title title={title} />);
  expect(display.find("h3").first().text()).toEqual(title);
});
