/* @flow */

import React from "react";
import { FormattedRelative } from "react-intl";
import { Repo as RepoType } from "../../../types";

const LastUpdated = ({ timestamp }: RepoType) => {
  return (
    <div className="repo__last-updated">
      Last Updated: <FormattedRelative value={timestamp} />
    </div>
  );
};

export default LastUpdated;
