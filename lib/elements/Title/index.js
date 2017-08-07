import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <span className="repo__title">
      <h3>
        {title}
      </h3>
    </span>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
