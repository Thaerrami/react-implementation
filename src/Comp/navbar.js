import React  from 'react';
import './nightmodebutton.css';
import {Link} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Hello from './Hello';
import classNames from "classnames";
import { connect } from 'react-redux'
class NavBar extends React.Component{
  render(){
   const style=classNames({'bg-light text-dark':this.props.mode.toLowerCase()==='light','bg-dark text-white':this.props.mode.toLowerCase()==='night'});
   const dark=classNames({'dark':this.props.mode.toLowerCase()==='night','light':this.props.mode.toLowerCase()==='light'})
   
   return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg={dark} variant={dark} className={style}>
        <Navbar.Brand href="#home" className={style}>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to='/home'>Formik taining</Link></Nav.Link>
          <Nav.Link ><Link to='/contactUs'>contactUs api fetch traning</Link></Nav.Link>
          <Nav.Link ><Link to='/todo'>todo state managemnt traning</Link></Nav.Link>
          <div style={{width:'fit-content'}} >
            <Hello />

          </div>
        </Nav>
        <Nav>
          </Nav>
      </Navbar.Collapse>
    </Navbar>

    </div>
    );
    
  }
}

  const mapStateToProps = (state) => {
    return {
      zefta:state.value,
      mode:state.mode
    }
}


  export default connect(mapStateToProps)(NavBar);