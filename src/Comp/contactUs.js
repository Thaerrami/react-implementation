import React  from 'react';
import './Cono.css'
import Updateuser from './updateuser.js';
import {getuser , deleteuser ,update} from './api';
import classnames from 'classnames';
import { connect } from 'react-redux';
import classNames from 'classnames'

class Contactus extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user:[],
            loaded:false,
            us:{},
            opened:true
        }
    }

/*  when data fetched completed the load icon will   stop  */ 

componentDidMount() 
{
    try{
        getuser().then(response=>{
            
            this.setState({user:response.data})
            this.setState({loaded:true})
                    })
       }
    catch(err){
        console.log(err);
       }
}

//size of object 
    size=(obj)=>{
        let size=0;
        for(let x in obj){if(x!==null)size++;}
        return size
    }
   
// put the user data clicked-on in view div
    putuser=(user)=>{
        this.setState({us:user})
        this.setState({opened:true});
        
    }

// delete user data from api

    deleteuser=(user)=>{
        
        try{deleteuser(user.id).then(res=>{
            this.setState({user:res.data})
      var  arr=this.state.user;
       var del=[...arr]
        del.splice(user,1)
            this.setState({user:del})
        })  }
        catch(err){console.log(err)}
        
    }

//update the data for user in api

    update=(values)=>{
         const id=this.state.us.id;
         update(id,values).then(()=>{
             alert('success');
            }).catch(er=>{
            alert('err') 
        })
}

///main 

    render() {
//

const showerbar=classnames({'container':true,'jumbotron':true,'dsi':true,'popup_show_data':this.state.opened,popup_show_data_closer:!this.state.opened});
const cover=classnames({'blod':this.state.opened,'close':!this.state.opened,'bg-light text-dark':this.props.mode.toLowerCase()==='light','bg-dark text-white':this.props.mode.toLowerCase()==='night'});

const style=classNames({'bg-light text-dark':this.props.mode.toLowerCase()==='light','bg-dark text-white':this.props.mode.toLowerCase()==='night'});
   const contain=classNames({'container':true,'text-dark':this.props.mode.toLowerCase()==='light','text-white':this.props.mode.toLowerCase()==='night'})

const {name, phone ,username,website}=this.state.us;

        return (
            <div className={style}>
                    {this.size(this.state.us)>0 ?(
                        <div className={cover}>
                           
                    <div className={showerbar}>
                     <div className='cardhead'>{website}</div>
                     <span className="close" onClick={()=>{this.setState({opened:false});console.log('close',this.state.opened)}}>&times;</span>
                   
                       <div style={{width:'100%'}}>
                       
                        <p>name : {name}</p><br/>
                         <p>phone : {phone}</p><br/>
                         <p>username : {username}</p>
                         </div>
                         
                    </div>
                    </div> ): ''}
                    <ul className={style}>
                         {this.state.loaded===true? <Data user={this.state.user} putuser={this.putuser}  deleteuser={this.deleteuser} dark={this.props.mode.toLowerCase()==='night'} /> : <Loading />  }
                    </ul>
                    <div  className={contain}>
                        <Updateuser onSubmit={this.update}   values={this.state.us}  />
                  </div>
                  
                </div>
        )
    }
}



function Data(props) {
    const mode=classNames({'lilo':true,'text-dark bg-white':props.dark===false,'text-primary bg-black':props.dark===true})
    return (
        <div>
        
            {props.user.map(
               user=>(
                <li key={user.id} className={mode} >
                    <button className="btn btn-primary" onClick={()=>{props.putuser(user)}}>select </button>&nbsp;&nbsp;
                    {/* <button className="btn btn-primary" onClick={()=>{props.deleteuser(user.id)}}> delete </button>&nbsp;&nbsp; */}
                    {user.name}
                </li>
                )
           )}
        </div>
    )
}


 function Loading() {
    return (
        <div>  
<div className="loader"></div>
<p style={{width:"fit-content",margin:"auto"}}>loading...</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      zefta:state.value,
      mode:state.mode
    }
  }
  
  
  export default connect(mapStateToProps)(Contactus);