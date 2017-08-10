import React from "react";
import Name from "./index";
import { shallow } from "enzyme";

test("Name element picks up the props correctly", () => {
  const props = {
    name: "react-component-library",
    url: "http://www.test.com"
  };
  const display = shallow(<Name {...props} />);
  expect(display.find("a").first().prop("href")).toEqual(props.url);
  expect(display.find("span").first().text()).toEqual(props.name);
});
