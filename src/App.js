import React from 'react';
import {Link} from 'react-router';
import NavItem from './components/Nav/NavItem.jsx';

const App = React.createClass({
  
  getInitialState() {
    return {
      subjectFilter: '',
      navLinks: ['Client', 'Admin']
    }
  },

  render() {

    const navStyle = {
      border: 0,
      borderRadius: 0
    };

    const titleStyle = {
      cursor: 'pointer'
    };

    const linkStyle = {
      cursor: 'pointer'
    };

    // three if statements below changing nav background, link (navLink) and title colors
    if (this.props.bgColor)
      navStyle.background = this.props.bgColor;

    if (this.props.titleColor)
      titleStyle.color = this.props.titleColor;

    if (this.props.linkColor)
      linkStyle.color = this.props.linkColor;

    // map navLinks, return <NavItem /> to be rendered
    const createLinkItem = this.state.navLinks.map((item, subjectFilter, index) => {
      const navId = item.toLowerCase();
      return <NavItem aStyle={linkStyle} key={item + index} id={navId} title={item} />
    });

    return (
      <div>
        <nav style={navStyle} className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" style={titleStyle} className="navbar-brand">CPC Test</Link>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{createLinkItem}</ul>
          </div>
        </nav>

        <div className="container">

          <div className="col-sm-12">

            <div onClick={this.onClick} className="subjects">
              {this.props.children}
            </div>

          </div>
        </div>
      </div>
    );
  }
});

export default App;
