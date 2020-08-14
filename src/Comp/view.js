import React, { Component } from 'react'
import {getuserone} from './api';
import './settings.css';
export default class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:{},
            booler:false
        }
    }
    get=(id)=>{
      try{  
          getuserone(id).then(resp=>{
          this.setState({user:resp})
          this.setState({booler:true})
      })
    }catch(err){
          console.log(err)
          console.log("err")
      }
    }

        componentWillMount=()=>{
           this.get(this.props.match.params.id)
        }
    
    render() {
        return (
            <div>
                view
                {console.log()}
                {this.state.booler?<Show name={this.state.user.data.name} id={this.state.user.data.id} username={this.state.user.data.username} email={this.state.user.data.email}  />:''}
            </div>
        )
    }
}

const Show =(props)=>{
    return(
        <>
        <div className='form-control'>{props.name}</div><br />
    <div className='form-control'>{props.id}</div><br />
    <div className='form-control'>{props.username}</div><br />
    <div className='form-control'>{props.email}</div>
    {console.log(props)}
        </>
    )
}