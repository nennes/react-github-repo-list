/* @flow */

import React from "react";
import { Repo as RepoType } from "../../../types";

const Title = ({ title }: RepoType) => {
  return (
    <span className="repo__title">
      <h3>
        {title}
      </h3>
    </span>
  );
};

export default Title;
