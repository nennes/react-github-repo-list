import React from "react";
import Url from "./index";
import { shallow } from "enzyme";

test("Url element picks up the props correctly", () => {
  const url = "http://www.example.com";
  const display = shallow(<Url url={url} />);
  expect(display.find("div").first().text()).toEqual(url);
});
