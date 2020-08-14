import React, { Component } from 'react'
import './fliper.css' ;
import {Prompt} from 'react-router-dom';
import {Formik,Form,Field} from 'formik';

class Fliper extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            email:'',
            password:''
        }
    }

get name(){
return 4;
}
    render(){
       
   const submit=(props)=>{
        console.log(props)
    }
   
   const structureoform=(props)=>{
    return(
        <>
        <Form>
        <Prompt when={props.dirty} message={'are you fucken sure'} />
            <Field className='form-control' name='name' />
            <Field className='form-control' type='email' name="email" />
            <Field className='form-control' type='password' name ='password' />
            <button type="submit" className='btn btn-primary' >go</button>
        </Form>
        </>
    )
    }
        return (
            <div>
                <div className="card">
                    <div className='face'>
                        <p>
                            login
                        </p>
                    </div>
                    <div className='back'>
                         <p>
                            enter your data
                        </p>
                            <Formik
                            initialValues={{name:"",email:'',password:''}}
                            onSubmit={submit}
                            render={structureoform}
                            />
                    </div>
                </div>
            </div>
        )
        }   
}

export default Fliper;