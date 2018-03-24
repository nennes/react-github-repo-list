/* global test, expect */

import React from "react";
import ReadMe from "./index";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import { shallow } from "enzyme";

test("ReadMe element renders a modal that has the correct props", () => {
  const markdown = "# Super cool library for React";
  const display = shallow(<ReadMe markdown={markdown} />);
  const modal = display.find(Modal);
  expect(modal).toHaveLength(1);
  expect(modal.find(ReactMarkdown).prop("source")).toEqual(markdown);
});
