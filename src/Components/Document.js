import React, { Component } from 'react';

class Document extends Component {
   render() {
      const storagepath = "https://public.siwanont.ml/XuHyresj35jIOyPma7CGyg/";

      if(this.props.data){
         var networks = this.props.data.download.map(function (network) {
            return <li key={network.name}><a href={storagepath + network.url} className="button"><i className="fa fa-download"></i> Download {network.name}</a></li>
         })
      }

      return (
         <section id="document">
            <div className="row">
               <div className="three columns"></div>
               <div className="nine columns main-col">
                  <h2>Documents</h2>
                  <ul className="download">
                     {networks}
                  </ul>
               </div>
            </div>
         </section>
      );
   }
}

export default Document;
