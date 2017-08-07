import React from "react";
import Name from "./index";
import { shallow } from "enzyme";

test("Name element picks up the props correctly", () => {
  const name = "react-component-library";
  const display = shallow(<Name name={name} />);
  expect(display.find("h2").first().text()).toEqual(name);
});
