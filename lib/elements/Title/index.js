/* @flow */

import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <span className="repo__title">
      <h3>
        {title}
      </h3>
    </span>
  );
};

export default Title;
