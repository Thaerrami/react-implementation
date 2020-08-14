import React, { Component } from 'react'
import './settings.css';
import classnames from 'classnames';

export default class Settings extends Component {
      constructor(props) {
            super(props)
      
            this.state = {
                   dark:false,
                   sound:true,
                   lang:false
            }
      }
      
       nightmood=()=>{
            this.setState({dark:!this.state.dark})    
          if (this.state.dark){console.log('night');}
          else{console.log('not ')}

           
      }
    render() {
          const bodye=classnames({'bodyer':this.state.dark,'dark-text':this.state.dark,'set-text':true});
      
          

        return (
            <div className={bodye}>
      <div className='container todo-pice'>
            <div className="btx" >
            <span className="tct" >night mode</span><br/>
            <label class="switch" >
                  <input type="checkbox" onClick={this.nightmood} />
                  <span class="slider round"></span>
            </label>
            </div>
      </div>
      <div className='container todo-pice'>
            <div className="btx">
            <span className="tct">ENG/AR</span><br/>
            <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
            </label>
            </div>
      </div>
      <div className='container todo-pice'>
            <div className="btx">
            <span className="tct">sound</span><br/>
            <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
            </label>
            </div>
      </div>
      <div className='container todo-pice'>
            <div className="btx">
            <span className="tct">sound</span><br/>
            <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
            </label>
            </div>
      </div>
      <div className='container todo-pice'>
            <div className="btx">
            <span className="tct">sound</span><br/>
            <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
            </label>
            </div>
      </div>
      <div className='container todo-pice'>
            <div className="btx">
            <span className="tct">sound</span><br/>
            <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
            </label>
            </div>
      </div>
            </div>
        )
    }
}
