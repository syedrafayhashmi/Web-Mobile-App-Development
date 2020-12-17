import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
class App extends Component{
  render(){
    return(
      <div>
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href='#'>RAFAY</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}
export default App;
