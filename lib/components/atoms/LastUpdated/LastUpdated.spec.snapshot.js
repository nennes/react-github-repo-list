/* global test, expect */

import React from "react";
import { IntlProvider } from "react-intl";
import LastUpdated from "./index";
import renderer from "react-test-renderer";

test("LastUpdated element renders correctly", () => {
  const timestamp = Date.parse("2015-12-13T13:36:22Z");
  const element = renderer.create(
    <IntlProvider>
      <LastUpdated timestamp={timestamp} />
    </IntlProvider>
  );
  expect(element.toJSON()).toMatchSnapshot();
});
