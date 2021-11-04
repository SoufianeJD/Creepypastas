import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HashRouter , Route,Redirect ,Switch } from "react-router-dom";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import AddStory from "./components/User/AddStory";
import ViewStory from "./components/User/Story";
import AdminStory from "./components/Admin/AdminStory";
import Stories from "./components/User/Stories";
import Contactbymail from "./components/User/Contactbymail";
import GenListstory from "./components/Admin/GenListstory";
import GenListstoryuser from "./components/User/GenListstoryuser";
import { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() { const [isOpen, setIsOpen] = useState(false);

  const toggle = () => { setIsOpen(!isOpen); };
  return (

    <HashRouter basename="/index.html">
     
   {/* <Route exact path="/"> <Redirect to="/"/> </Route> */}
   <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
      <Route path="/" exact component={Main}/>

      <Route path="/Signin"  component={Signin}/>
<Route path="/Signup"  component={Signup}/>
<Route path="/AddStory"  component={AddStory}/>
<Route path="/Story/:id"  component={ViewStory}/>
<Route path="/AdminStory"  component={AdminStory}/>
<Route path="/Stories"  component={Stories}/>
<Route path="/GenListstory"  component={GenListstory}/>
<Route path="/GenListstoryuser"  component={GenListstoryuser}/>
<Route path="/Contactbymail"  component={Contactbymail}/>
<Contactbymail />
<Footer />
</Switch>
    </HashRouter>
 
  );
}

export default App;