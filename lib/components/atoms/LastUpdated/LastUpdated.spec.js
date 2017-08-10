import React from "react";
import LastUpdated from "./index";
import TimeAgo from "react-timeago";
import { shallow } from "enzyme";

test("LastUpdated element renders a modal that has the correct props", () => {
  const timestamp = "2015-12-13T13:36:22Z";
  const display = shallow(<LastUpdated timestamp={timestamp} />);
  const timeAgo = display.find(TimeAgo);
  expect(timeAgo).toHaveLength(1);
  expect(timeAgo.prop("date")).toEqual(timestamp);
});
