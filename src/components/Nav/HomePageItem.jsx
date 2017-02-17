var React = require('react');
var Link = require('react-router').Link;

var HomePageItem = React.createClass({

  render: function() {

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

module.exports = HomePageItem;