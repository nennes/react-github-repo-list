import React from "react";
import PropTypes from "prop-types";

const Name = ({ name, url }) => {
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

Name.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Name;
