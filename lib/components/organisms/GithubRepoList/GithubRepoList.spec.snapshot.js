/* global test, expect */

import React from "react";
import GithubRepoList from "./index";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
import renderer from "react-test-renderer";

test("RepoList organism renders correctly", () => {
  var mock = new MockAdapter(axios);

  mock.onGet("https://api.github.com/users/dummy/repos").reply(200, {
    data: [
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
  });

  const component = renderer.create(<GithubRepoList username="dummy" />);
  expect(component.toJSON()).toMatchSnapshot();
});
