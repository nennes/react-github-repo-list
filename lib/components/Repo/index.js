import React from "react";
import PropTypes from "prop-types";
import Name from "../../elements/Name";
import Title from "../../elements/Title";
import ReadMe from "../../elements/ReadMe";
import LastUpdated from "../../elements/LastUpdated";

const Repo = props => {
  const { name, title, url, markdown, timestamp } = props;

  return (
    <div className="repo">
      <p>
        <Name name={name} url={url} />
      </p>
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
