"use strict";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Url extends PureComponent {
  render() {
    return (
      <div className="repo-url">
        {this.props.url}
      </div>
    );
  }
}

Url.propTypes = {
  url: PropTypes.string.isRequired
};
