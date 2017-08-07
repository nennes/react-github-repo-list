import React from "react";
import PropTypes from "prop-types";

const Url = ({ url }) => {
  return (
    <div>
      {url}
    </div>
  );
};

Url.propTypes = {
  url: PropTypes.string.isRequired
};

export default Url;
