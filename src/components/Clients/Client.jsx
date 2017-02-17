import React from 'react';

const Client = React.createClass({

onClick(event) {
    event.stopPropagation();

    // toggle hidden class
    // responsible for showing/hiding extra information on planets
    // hidden is in main_style.css sheet in public folder
    $(`#${this.props.id}`).toggleClass('hidden');
  },

  render() {



    const prods = this.props.products.map((item, index) =>{
        const keywords = item.keywords.map(item => {
          const rnk = item.ranks.map(item => {
            return (
            <span>
            <ul key={index}>
              
              <p><strong>Rank Position :  </strong>{item.rank_position}</p>
              <p><strong>Rank Page :  </strong>{item.rank_page}</p>
              </ul>    
            </span>
              )
          });
          return (
            <span>
            <div key={index}>
              <p><strong>Keyword name:  </strong>{item.keyword_name}</p>
              <p><strong>Keyword country:  </strong>{item.keyword_country}</p>
              </div>   
              <b>Rank</b>
              {rnk} 
            </span>
          );
        });
      return(
          <div key={index}>
            <p><strong>Product Name: </strong>{item.product_name}   </p>

            <p>{item.product_image_url}</p>
             <b>Keywords</b>
              {keywords}
          </div>
        )
    });

     const propsStyle = {
      marginTop: 25
    };

    return (
      <div className="col-sm-12 compBlock">
        <div className="col-sm-6">
          <h3 key={this.props.id} >{this.props.name}</h3>
           <a className="seeAlsoLink" onClick={this.onClick}>Show Details</a>
       
      </div>
         <div className="col-sm-6" style={propsStyle}>
               <div id={this.props.id}  className="hidden props">
                   test
               </div>
         </div>
      </div>   
    )
  }

});

export default Client;