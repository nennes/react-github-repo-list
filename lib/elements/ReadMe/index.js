/* @flow */

import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";

type Props = { markdown: string };
type State = { isModalOpen: boolean };

export default class ReadMe extends Component<void, Props, State> {
  constructor(props: Props, context: any) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  state: State;

  showReadme() {
    this.setState({ isModalOpen: true });
  }

  closeReadMe() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className="repo__read-me">
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
