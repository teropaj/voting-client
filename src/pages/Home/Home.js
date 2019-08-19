import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {

    state= {
        screams: null
    }
    
    componentDidMount(){
    
    const url= 'screams'

    axios.get(url)
        .then(res => {
            this.setState({
                screams: res.data
            })
            console.log(res)
        })
        .catch(err => console.log(err))


          
    
    }
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
