import React from 'react';



const Admin = React.createClass({


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
              //start collapse
            <div>
             

                <table className="table-fill">
                <thead>
                  <tr>
                  <th className="text-left">Position</th>
                  <th className="text-left"> Page</th>
                  <th className="text-left"> Dates </th>
                  </tr>
                  </thead>
                    <tbody className="table-hover">
                  <tr>
                  <td className="text-left">{item.rank_position} </td>
                  <td className="text-left">{item.rank_page}</td>
                   <td className="text-left">{item.rank_date}</td>
                  </tr>
                  </tbody>
                  </table>
             
            </div>
            //end collapse
              )
          });
          return (
           <div>
              <div key={index} className="table-title">
                  <h4>Keywords</h4>
                </div>
            <table className="table-fill">
                    <thead>
                  <tr>
                  <th className="text-left"> Name</th>
                  <th className="text-left"> Country</th>
                  </tr>
                  </thead>
                  <tbody className="table-hover">
                  <tr>
                  <td className="text-left">{item.keyword_name} </td>
                  <td className="text-left">{item.keyword_country}</td>
                  </tr>
                  </tbody>
             </table>
              <div className="table-title">
                  <h4>Ranks</h4>
                </div>
              {rnk} 
            </div>
          )
        });
      return(
          <div className="tab" >
      <input key={index}id={item.product_id} type="checkbox" name="tabs" />
      <label  htmlFor={item.product_id}>{item.product_name} </label>
      <div className="tab-content">
     <div> < img src={item.product_image_url} width="300"  /></div>
        {keywords}
      </div>
    </div>
        )
    });

     const propsStyle = {
      marginTop: 25
    };
    
    return (
      <div className="col-sm-12 compBlock">
        <div className="col-sm-4">
          <h3>{this.props.name}</h3>
      
       
      </div>
         <div className="col-sm-8" style={propsStyle}>
               <div  className=" props">
                     {prods}
               </div>
         </div>
      </div>   
    )
  }

});

export default Admin;