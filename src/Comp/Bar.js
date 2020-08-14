import React from 'react'

export default class Bar extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        bar:0
      }
    }
  
    render() {
     const  s=()=>{
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
          this.setState({width:scrolled})
      }
      window.onscroll=s;
      return (
        <>
        <div   className='road' style={{width:this.state.width+'%'}}    >
          
          </div>

        </>
      )
    }
  }