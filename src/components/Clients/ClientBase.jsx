import React from 'react';
import Client from './Client.jsx';
import update from 'react-addons-update';



const ClientBase = React.createClass({

  getInitialState() {
    return { clientLi: [] }
  },

  componentWillMount() {

    $.ajax({
      url: 'https://richcostello.github.io/cpcapi/cpc.json',
      dataType: 'json',
      cache: false,
      success: data => {
        // set data to planets array recieved from SWAPI
        this.setState({ clientLi: data});
      },
      error: (xhr, status, err) => {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }
    });


  },

  render() {


    // map planets array to get name and URL to link to individual pages
      const createPlanetItem = this.state.clientLi.map((item, index) => <Client
        id={item.client_id + index}
        name={item.client_name}
        prodname={item.product_name}
        products ={item.products}
        keywords={item.keywords}
        ranks={item.ranks}
        url={item.url}
        productid={item.product_id}
        
      />);

    return (
      <div>
     test
      </div>
    )
  }

});

export default ClientBase;