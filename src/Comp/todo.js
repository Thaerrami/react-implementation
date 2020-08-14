import React, { Component } from 'react'
import './todo.css';
import classnames from 'classnames';
import Bar from './about';
import classNames from 'classnames';
import {connect} from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dat:[{text:"react js",comp:false}
            ,{text:"node js",comp:false}],
            textfield:"",
            valdata:"add task",
            col:"green",
            done:"done",
            cdone:[]
        }
    }

    putdata=(e)=>{
        this.setState({textfield:e.target.value})
    }

     task=(index)=>{
         let arr=[...this.state.dat];
         arr.splice(index,1);
        this.setState({dat:arr});
        }

        complited=(index)=>{
            let arr=[...this.state.dat];
         arr[index].comp=!arr[index].comp;
        this.setState({dat:arr});
        }

    task2=(index)=>{
       this.setState({cdone:'btn btn-success'});
     
   }
   
removeall=()=>{
    
    let x=window.confirm("are you sure this will delete all tasks!");
    if(x){
        this.setState({dat:[]});
    }
}

    addnewtask=()=>{
    if(this.state.textfield !==''){
        console.log(this.state)
        const arr=[...this.state.dat];
        arr.push({text:this.state.textfield});
        this.setState({dat:arr})
        this.setState({textfield:""})
    } 
    /* ended*/ 
    
 }

    shir = (e) => {
        if (e.key === 'Enter') {
            this.addnewtask()
        }
      }

      
    render() { 
          let classes=classnames ({red:this.state.dat.length===0,green :this.state.dat.length > 0})
          let c=classnames ({no_task:this.state.dat.length===0,add_task :this.state.dat.length > 0})
          const style=classNames({'bg-light text-dark':this.props.mode.toLowerCase()==='light','bg-dark text-white':this.props.mode.toLowerCase()==='night'});
           const input=classNames({'form-control todo-adder':true,'dark':this.props.mode.toLowerCase()==='night','light':this.props.mode.toLowerCase()==='light'})
          const headtodo=classnames({'head-todo':true,'bg-dark text-white':this.props.mode.toLowerCase()==='night','bg-light text-dark':this.props.mode.toLowerCase()==='light'});
        return (
            <div className={style}>
                <Bar />
                <div className={style}>
                    
                 <input className={input} onKeyDown={this.shir} value={this.state.textfield} onChange={this.putdata}  />
             <div className='button-holder'>
                <button className="btn btn-danger todo-adder-button"  onClick={this.removeall}>remove all</button>
                <button className="btn btn-success todo-adder-button"  onClick={this.addnewtask}>add task</button>
            </div>
               </div>
        <p className={ classes }  >{c}</p>
               <ul className={headtodo}>
                {
                this.state.dat.map((todo,index)=>
                <li key={index} className={todo.comp?'completed lilo':'lilo'} >   
                    <button className="btn btn-primary" onClick ={()=>{this.task(index)}}> remove </button> &nbsp;
                    <button className="btn btn-primary" onClick ={()=>{this.complited(index)}}> comleted </button> &nbsp;
                  <p className="data">{`${todo.text}  `}</p>  
                   </li>)
                }   
                </ul>
                
               <span className='up' onClick={()=>window.scrollTo(0,0)}>&#8679;</span> 
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
      zefta:state.value,
      mode:state.mode
    }
}


  export default connect(mapStateToProps)(Todo);