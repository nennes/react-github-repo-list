/* @flow */

import axios from "axios";
import React, { PureComponent } from "react";
import { Repo as RepoType, GithubRepo as GithubRepoType } from "../../../types";
import RepoList from "../RepoList";

type Props = {
  username: string
};

type State = {
  lastUpdated?: Date,
  repoList?: Array<RepoType>
};

export default class GithubRepoList extends PureComponent<void, Props, State> {
  constructor(props: Props, context: any) {
    super(props);
    this.state = {};
  }

  state: State;

  componentWillMount() {
    axios
      .get(`https://api.github.com/users/${this.props.username}/repos`, {
        params: {
          sort: "updated"
        }
      })
      .then(response =>
        this.setState({
          lastUpdated: new Date(),
          repoList: this.buildRepoList(response.data)
        })
      )
      .catch(error => console.log(error));
  }

  buildRepoList(apiResponseData: Array<GithubRepoType>): Array<RepoType> {
    console.log(apiResponseData);
    return apiResponseData.map(repo => ({
      name: repo.name,
      title: repo.description,
      url: repo.hmtl_url,
      markdown: "# not implemented yet",
      timestamp: new Date(repo.updated_at)
    }));
  }

  render() {
    if (this.state.repoList) {
      return <RepoList repoList={this.state.repoList} />;
    } else {
      return <div>Loading...</div>;
    }
  }
}
