/* @flow */

import React from "react";
import { Repo as RepoType } from "../../../types";
import TimeAgo from "react-timeago";

const LastUpdated = ({ timestamp }: RepoType) => {
  return (
    <div className="repo__last-updated">
      Last Updated: <TimeAgo date={timestamp} />
    </div>
  );
};

export default LastUpdated;
