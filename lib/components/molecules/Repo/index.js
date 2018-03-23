/* @flow */

import React from "react";
import { IntlProvider } from "react-intl";
import { Repo as RepoType } from "../../../types";
import Name from "../../atoms/Name";
import Title from "../../atoms/Title";
import ReadMe from "../../atoms/ReadMe";
import LastUpdated from "../../atoms/LastUpdated";

const Repo = ({ name, title, url, markdown, timestamp }: RepoType) => {
  return (
    <IntlProvider locale="en">
      <div className="repo">
        <div>
          <Name name={name} url={url} />
        </div>
        <div>
          <Title title={title} />
        </div>
        <div>
          <ReadMe markdown={markdown} />
          <LastUpdated timestamp={timestamp} />
        </div>
      </div>
    </IntlProvider>
  );
};

export default Repo;
