import React from "react";
import PropTypes from "prop-types";
import Name from "../Name";
import Title from "../Title";
import ReadMe from "../ReadMe";
import LastUpdated from "../LastUpdated";

const Repo = props => {
  const { name, title, url, markdown, timestamp } = props;

  return (
    <div>
      <Name name={name} url={url} />
      <p>
        <Title title={title} />
      </p>
      <p>
        <ReadMe markdown={markdown} />
        <LastUpdated timestamp={timestamp} />
      </p>
    </div>
  );
};

Repo.propTypes = {
  markdown: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Repo;
