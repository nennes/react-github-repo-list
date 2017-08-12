/* @flow */

import React from "react";
import { Repo as RepoType } from "../../../types";

const Name = ({ name, url }: RepoType) => {
  return (
    <div className="repo__name">
      <a href={url} target="_blank">
        <span title={name}>
          {name}
        </span>
      </a>
    </div>
  );
};

export default Name;
