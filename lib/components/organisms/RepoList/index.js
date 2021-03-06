/* @flow */

import React from "react";
import { Repo as RepoType } from "../../../types";
import Repo from "../../molecules/Repo";
import List from "../../atoms/List";

type Props = {
  repoList: Array<RepoType>
};

const RepoList = (props: Props) => {
  return (
    <List>
      {props.repoList.map((repo, index) => <Repo {...repo} key={index} />)}
    </List>
  );
};

export default RepoList;
