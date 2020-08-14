import React from 'react'
import axios from 'axios';

async function getuser(){
      try{
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            console.log(resp);
            return resp
      }
      catch(err){
            console.error(err);
      }}

export default class login extends React.Component {
      componentDidMount=()=> {
            getuser();
      }
      
      render() {
            return (
                  <div>
                        
                  </div>
            )
      }
}
