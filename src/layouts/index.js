import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import TopNav from "./../components/TopNav";

import PageContainer from "./../components/PageContainer";
import "../css/typography.css";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === "/";

    return (
      <div>
        <Helmet
          title="Starkville Programming Meetup"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <div>
          <TopNav />
        </div>
        <PageContainer isRoot={isRoot}>{this.props.children()}</PageContainer>
      </div>
    );
  }
}
