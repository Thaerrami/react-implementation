import React, { Component } from 'react'
import {connect} from 'react-redux';
import classNames from 'classnames';
class Foot extends Component {
    render() {
      const style=classNames({'bg-light text-dark':this.props.mode.toLowerCase()==='light','bg-dark text-white':this.props.mode.toLowerCase()==='night'});
   const footer=classNames({'page-footer font-small pt-4':true,'bg-white   text-dark':this.props.mode.toLowerCase()==='light','bg-dark text-white':this.props.mode.toLowerCase()==='night'})
  

        return (
            <div className={style}>
                
      <footer className={footer}>

<div className="container-fluid text-center  text-md-left">


  <div className="row">


    <div className="col-md-6 mt-md-0 mt-3">

      <h5 className="text-uppercase">react formik and yup test</h5>
      <p>this is the first time i use formik and yup </p>

    </div>


    <hr className="clearfix w-100 d-md-none pb-3" />

  
    <div className="col-md-3 mb-md-0 mb-3">

      <h5 className="text-uppercase">Links</h5>

      <ul className="list-unstyled">
        <li>
          <a href="#!">Link 1</a>
        </li>
        <li>
          <a href="#!">Link 2</a>
        </li>
      </ul>

    </div>


  </div>
  

</div>

<div className="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
</div>


</footer>
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


export default connect(mapStateToProps)(Foot);