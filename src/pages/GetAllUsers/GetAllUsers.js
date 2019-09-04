 import React, { Component } from 'react'
 import axios from 'axios';

 export default class GetAllUsers extends Component {
    state = {
        profile: null,
        screamIdParam: null
      };



      
        componentDidMount() {
             
             
            axios
              .get(`/getAllUsers`)
              .then((res) => {
                // this.setState({
                //   profile: res.data 
                // });
                console.log(res)
              })
              .catch((err) => console.log(err));
          }

          render() {

         return (
             <div>
                 {this.state.profile}
             </div>
         )
     }
 }
 