/* @flow */

import React from "react";
import { Repo as RepoType } from "../../../types";
import Repo from "../../molecules/Repo";

type Props = {
  repoList: Array<RepoType>
};

const RepoList = (props: Props) => {
  return (
    <div className="repo-list">
      <ul>
        {props.repoList.map((repo, index) => {
          return (
            <li key={index}>
              <Repo {...repo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RepoList;
