/* @flow */

import React from "react";
import TimeAgo from "react-timeago";

const LastUpdated = ({ timestamp }: { timestamp: string }) => {
  return (
    <div className="repo__last-updated">
      Last Updated: <TimeAgo date={timestamp} />
    </div>
  );
};

export default LastUpdated;
