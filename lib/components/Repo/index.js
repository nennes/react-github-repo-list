/* @flow */

import React from "react";
import Name from "../../elements/Name";
import Title from "../../elements/Title";
import ReadMe from "../../elements/ReadMe";
import LastUpdated from "../../elements/LastUpdated";

const Repo = ({
  name,
  title,
  url,
  markdown,
  timestamp
}: {
  name: string,
  title: string,
  url: string,
  markdown: string,
  timestamp: string
}) => {
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

export default Repo;
