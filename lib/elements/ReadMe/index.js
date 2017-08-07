import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";

export default class ReadMe extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  showReadme() {
    this.setState({ isModalOpen: true });
  }

  closeReadMe() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showReadme()}>ReadMe</button>
        <Modal
          contentLabel="README file contents"
          isOpen={this.state.isModalOpen}
          onRequestClose={() => this.closeReadMe()}
        >
          <ReactMarkdown source={this.props.markdown} />
          <p>
            <button onClick={() => this.closeReadMe()}>Close</button>
          </p>
        </Modal>
      </div>
    );
  }
}

ReadMe.propTypes = {
  markdown: PropTypes.string.isRequired
};
