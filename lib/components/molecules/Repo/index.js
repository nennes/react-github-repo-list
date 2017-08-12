/* @flow */

import React from "react";
import { Repo as RepoType } from "../../../types";
import Name from "../../atoms/Name";
import Title from "../../atoms/Title";
import ReadMe from "../../atoms/ReadMe";
import LastUpdated from "../../atoms/LastUpdated";

const Repo = ({ name, title, url, markdown, timestamp }: RepoType) => {
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
