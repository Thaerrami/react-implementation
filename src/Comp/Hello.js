import React from 'react';
import { connect } from 'react-redux';
import { make_night , make_light } from '../redux';
import './nightmodebutton.css';

class Hello extends React.Component{
state={bool:true}
stater=(fun1,fun2)=>{

  this.setState({bool:!this.state.bool})
  this.state.bool?fun2():fun1()
  

}
render(){
return(
    <>


<div >
  <span className='m-3 font-weight-bold'>
{this.props.mode}
</span>
 <label className="switch" >
   <input type="checkbox" onClick={()=>this.stater(this.props.make_light,this.props.make_night)} />
   <span className="slider round"></span>
 </label>
 </div>
            
         
    </>
)

}}

const mapStateToProps = (state) => {
    return {
      zefta:state.value,
      mode:state.mode
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    make_night:()=>dispatch(make_night()),
    make_light:()=>dispatch(make_light())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello)