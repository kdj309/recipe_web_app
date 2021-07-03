import './App.css';
import NavBar from './NavBar';
import About from './About';
import Homepage from './Homepage';
import Receipe from './Receipe'
import Allreceipes from './Allreceipes';
import Footer from './Footer'
import Aloo_bonda from './Aloo_bonda';
import Upma from './Upma';
import Samosa from './Samosa';
import Meduvada from './Meduvada';
import Mangoshrikhand from './Mangoshrikhand';
import GajarHalwa from './GajarHalwa';
import Rasmalaicake from './Rasmalaicake';
import SweetBoondi from './SweetBoondi';
import ChannaDalfry from './ChannaDalfry';
import Palakpaneer from './Palakpaneer';
import Paneerbuttermasala from './Paneerbuttermasala';
import Matarpaneer from './Matarpaneer';
import {Route,BrowserRouter,Switch,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/'>
         <NavBar></NavBar>
         <Homepage></Homepage>
         <Receipe></Receipe>
         <Footer></Footer>
    </Route>
    <Route exact path='/receipes'>
         <NavBar></NavBar>
         <Allreceipes></Allreceipes>
         <Footer></Footer>
    </Route>
    <Route exact path='/Aloo Bonda'>
         <NavBar></NavBar>
         <Aloo_bonda></Aloo_bonda>
         <Footer></Footer>
    </Route>
    <Route exact path='/Upma'>
         <NavBar></NavBar>
         <Upma></Upma>
         <Footer></Footer>
    </Route>
    <Route exact path='/Samosa'>
         <NavBar></NavBar>
         <Samosa></Samosa>
         <Footer></Footer>
    </Route>
    <Route exact path='/Medu vada'>
         <NavBar></NavBar>
         <Meduvada></Meduvada>
         <Footer></Footer>
    </Route>
    <Route exact path='/Mango shrikhand'>
         <NavBar></NavBar>
         <Mangoshrikhand></Mangoshrikhand>
         <Footer></Footer>
    </Route>
    <Route exact path='/Gajar Halwa'>
         <NavBar></NavBar>
         <GajarHalwa></GajarHalwa>
         <Footer></Footer>
    </Route>
    <Route exact path='/Rasmalai cake'>
         <NavBar></NavBar>
         <Rasmalaicake></Rasmalaicake>
         <Footer></Footer>
    </Route>
    <Route exact path='/Sweet Boondi'>
         <NavBar></NavBar>
         <SweetBoondi></SweetBoondi>
         <Footer></Footer>
    </Route>
    <Route exact path='/Channa Dal fry'>
         <NavBar></NavBar>
         <ChannaDalfry></ChannaDalfry>
         <Footer></Footer>
    </Route>
    <Route exact path='/Palak paneer'>
         <NavBar></NavBar>
         <Palakpaneer></Palakpaneer>
         <Footer></Footer>
    </Route>
    <Route exact path='/Paneer butter masala'>
         <NavBar></NavBar>
         <Paneerbuttermasala></Paneerbuttermasala>
         <Footer></Footer>
    </Route>
    <Route exact path='/Matar paneer'>
         <NavBar></NavBar>
         <Matarpaneer></Matarpaneer>
         <Footer></Footer>
    </Route>
    <Route exact path='/about'>
         <NavBar></NavBar>
         <About></About>
         <Footer></Footer>
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
