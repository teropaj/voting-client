import React, { Component } from 'react'
import axios from 'axios'
import Signin from '../Signin/Signin'

export default class Home extends Component {

    state= {
        screams: null
    }
    
    componentDidMount(){
    
    //const url= '/getUsers'
    const url= '/getAllUsers'
    axios.get(url)
        .then(res => {
            this.setState({
                screams: res.data
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))


          
    
    }
    render() {
        let jee
        if (this.state.screams==="login first") jee=<Signin/>
         else jee=null

        return (
            <div>
                {jee}
                {//if (this.state.screams==={"error":"login first"}) return `<h1>Login first</h1>`)
                }
                Home
            </div>
        )
    }
}
