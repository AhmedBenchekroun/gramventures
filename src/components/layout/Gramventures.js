import React, {Component} from 'react';
//import {axios} from 'axios';
var axios = require('axios');

class Gramventures extends Component {

  constructor() {
    super();
    this.state = {gramventures: []};
  }

  componentDidMount() {
   var _this = this;
   console.log('componentDidMount');
    this.serverRequest = 
      axios
        .get("http://localhost:3000/gramventures")
        .then(function(result) {    
          //console.log("DATA:", result.data)
          _this.setState({
            gramventures: result.data

          });
        })
        .catch (function (response) {
          console.log(response);
        }) 
  }

  render() {
    return (
        <div>
          <h3>Gramventures</h3>
          {console.log (this.state.gramventures)}
        </div>
    )
  }
  
}

export default Gramventures;