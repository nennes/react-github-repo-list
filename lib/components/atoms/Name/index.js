/* @flow */

import React from "react";

const Name = ({ name, url }: { name: string, url: string }) => {
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

export default Name;
