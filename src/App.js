import React from 'react';
import NavBar from './Comp/navbar'
import Contactus from './Comp/contactUs';
import Home from './Home';
import Login from './Comp/login';
import Settings from './Comp/settings';
import Foot from './Comp/foot';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Todo from "./Comp/todo";
//import Form from 'react-bootstrap/Form';
import './App.css';
import Bar from './Comp/Bar'
import Fliper from './Comp/fliper';
import View from './Comp/view';
import {connect} from 'react-redux';
import classNames from 'classnames';
class App extends React.Component {

  render(){
    const styler=classNames({'bg-light text-dark':this.props.mode.toLowerCase()==='light','bg-dark text-white':this.props.mode.toLowerCase()==='night'});
  
    return (
       <Router> 
  <div className={styler}>
      <NavBar/>
    <Bar />
       <Switch >
        <Route  path="/login" component={Login} />
        <Route  path="/view/:id" exact component={View} />
        <Route  path="/settings" component={Settings}/>
        <Route  path="/contactUs" component={Contactus}/>
        <Route  exact path="/todo" component={Todo}/>
        <Route   path="/home" component={Home}/>
        <Route   path="/fliper" component={Fliper}/>
        <Route exact path="/"component={Contactus}/>
      </Switch>
        <Foot />
  </div>
       </Router>
  );
}
}

const mapStateToProps = (state) => {
  return {
    zefta:state.value,
    mode:state.mode
  }
}


export default connect(mapStateToProps)(App);
