import React from 'react';
import Product from './Admin.jsx';



const AdminBase = React.createClass({

  getInitialState() {
    return { planets: [] }
  },

  componentWillMount() {

    $.ajax({
      url: 'https://richcostello.github.io/cpcapi/cpc.json',
      dataType: 'json',
      cache: false,
      success: data => {
        // set data to planets array recieved from SWAPI
        this.setState({ planets: data});
      },
      error: (xhr, status, err) => {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }
    });


  },

  render() {

    // map planets array to get name and URL to link to individual pages
      const createPlanetItem = this.state.planets.map((item, index) => <Product
        key={item.client_id + index} 
        id={item.client_id}
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
        {createPlanetItem}
      </div>
    )
  }

});

export default AdminBase;