import React, { Component  } from 'react'
import { Formik, Field,ErrorMessage } from 'formik'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data:{},
      vis:"hid",
      former:"forme",
      name:'awedawed'
    }
  }

  

  onSubmit=e=>{
    
    this.setState({data:e})
    if(!  e.name.includes('thaer')){
      this.setState({former:"formerr"})
      setTimeout(() => {
        this.setState({former:"forme"});

      }, 703);
  }else{
     
      this.setState({former:"forme",vis:"show"})
      window.location.replace("./todo");
    }
  }
  close=()=>{
    this.setState({vis:"hid"})
  }

onNameEnter=(e)=>{
this.setState({name:e.target.value})
console.log(e.target.value);
}

  display=props=>{
    
    return(
      <form onSubmit={props.handleSubmit} className={this.state.former}>
        <label>name :</label>
        <Field className='form-control'  name ='name'  />
        <ErrorMessage render={err=>(<div className="error">{err}</div>)}  name='name' /><br />
        <label>email :</label>
        <Field className='form-control'  type="email" name='email' />
        <ErrorMessage component="span" className="error" name='email' /><br />
        <label>password :</label>
        <Field className='form-control' type="password" name='password' />
        <ErrorMessage component="span" className="error" name='password' />
        <div className="submit-button">
        <button type="submit" className="btn btn-success">go</button>
        <Link>forget password</Link>
        </div>
      </form>
    )
  }

  validate=()=>{
    const valide =Yup.object().shape({
      name:Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('enter the name '),
      email:Yup.string().required('enter the email '),
      password:Yup.string().required('enter the password')
    })
    return valide;
  }

  render() {
    return (
      <div>
        <div className={this.state.vis}>
        <div class="alert alert-success alert-dismissible">
    <button type="button" class="close" data-dismiss="alert" onClick={this.close}>&times;</button>
    <strong>Success!</strong> 
  </div>
  </div>
        <Formik
        initialValues={{name:'',email:'',password:''}}
        onSubmit={this.onSubmit}
        render={this.display}
        validationSchema={this.validate()}
        />

      </div>
    )
  }
}
