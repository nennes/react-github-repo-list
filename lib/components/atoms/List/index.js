/* @flow */

import React from "react";

type Props = {
  children: Array<React.Element<*>>
};

const List = (props: Props) => {
  return (
    <ul className="list">
      {props.children}
    </ul>
  );
};

export default List;
