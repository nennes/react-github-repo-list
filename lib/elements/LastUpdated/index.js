import React from "react";
import PropTypes from "prop-types";
import TimeAgo from "react-timeago";

const LastUpdated = ({ timestamp }) => {
  return (
    <div className="repo__last-updated">
      Last Updated: <TimeAgo date={timestamp} />
    </div>
  );
};

LastUpdated.propTypes = {
  timestamp: PropTypes.string.isRequired
};

export default LastUpdated;
