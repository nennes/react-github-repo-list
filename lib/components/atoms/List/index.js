/* @flow */

import React from "react";

type Props = {
  children: Array<React.Element<*>>
};

const List = (props: Props) => {
  return (
    <ul className="list">
      {props.children.map((el, index) => {
        return (
          <li key={index}>
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
