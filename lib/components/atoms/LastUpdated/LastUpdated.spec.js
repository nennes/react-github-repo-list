import React from "react";
import LastUpdated from "./index";
import { FormattedRelative } from "react-intl";
import { shallow } from "enzyme";

test("LastUpdated element renders a modal that has the correct props", () => {
  const timestamp = Date.parse("2015-12-13T13:36:22Z");
  const display = shallow(<LastUpdated timestamp={timestamp} />);
  const timeAgo = display.find(FormattedRelative);
  expect(timeAgo).toHaveLength(1);
  expect(timeAgo.prop("value")).toEqual(timestamp);
});
