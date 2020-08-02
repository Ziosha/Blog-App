import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Nomatch} from './Nomatch';

import {Navbarnav} from './components/Navbar';
import {NavbarDown} from './components/NavbarDown';


function App() {
  return (
        <>
           <Navbarnav/>
            <Router>
           <Switch>
             <Route exact path="/"><Home/></Route>
             <Route  path="/about"><About/></Route>
             <Route  path="/contact"><Contact/></Route>
             <Route  component ={Nomatch}/>

           </Switch>
         </Router>
         <NavbarDown/>
        
        </>
  );
}

export default App;
