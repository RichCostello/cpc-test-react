import React from 'react';
import {Link} from 'react-router';

const HomePageItem = React.createClass({

  render() {

    return (
      <div className="col-xs-12">
        <h1>CPC  TEST</h1>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/client" id="films">Client Example</Link></h2>
        </div>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/admin" id="admin">Main Admin</Link></h2>
        </div>

      </div>
    );
  }
});

export default HomePageItem;