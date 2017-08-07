import React from "react";
import PropTypes from "prop-types";

const Name = ({ name, url }) => {
  return (
    <a className="repo-name" href={url} target="_blank">
      <span title={name}>
        {name}
      </span>
    </a>
  );
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Name;
