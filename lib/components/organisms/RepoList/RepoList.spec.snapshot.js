/* global test, expect */

import React from "react";
import RepoList from "./index";
import renderer from "react-test-renderer";

test("RepoList organism renders correctly", () => {
  const props = {
    repoList: [
      {
        markdown: "# Some markdown",
        name: "repository-name",
        timestamp: "2015-12-13T13:36:22Z",
        title: "Repository title",
        url: "http://www.test.com"
      },
      {
        markdown: "# Some more markdown",
        name: "another-repository-name",
        timestamp: "2015-12-15T15:33:22Z",
        title: "Another repository title",
        url: "http://www.example.com"
      }
    ]
  };

  const component = renderer.create(<RepoList {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
