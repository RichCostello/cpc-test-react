import React from 'react';
import {Link} from 'react-router';

const NavItem = React.createClass({

  getInitialState() {
    return { hover: false };
  },

  // mouseOver and mouseOut changing state of hover to change style
  mouseOver(e) {
    this.setState({hover: true});
  },

  mouseOut(e) {
    this.setState({hover: false});
  },

  render() {

    return (
      <li className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <Link to={`/${this.props.id}`} style={this.props.aStyle} id={this.props.id}>{this.props.title}</Link>
      </li>
    );
  }
});

export default NavItem;