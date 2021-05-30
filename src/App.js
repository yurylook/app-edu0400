import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {About} from "./pages/About";
import {Menu} from "./components/Menu";
import {Header} from "./components/Header";
import {Blog} from "./pages/Blog";
import {Footer} from "./components/Footer";
import {Post} from "./components/Post";
import {AddBet} from "./pages/AddBet";
import {RegUser} from "./pages/RegUser";
import {AuthUser} from "./pages/AuthUser";
import {GetBet} from "./pages/GetBet";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Menu/>
            <Header/>
            <Route exact path="/" component={()=><Blog/>}/>
            <Route path="/post" component={()=><Post/>}/>
            <Route path="/about" component={()=><About/>}/>
            <Route path="/add-bet" component={()=><AddBet/>}/>
            <Route path="/reg-user" component={()=><RegUser/>}/>
            <Route path="/auth" component={()=><AuthUser/>}/>
            <Route path="/get-bet" component={()=><GetBet/>}/>
        </BrowserRouter>
        <hr/>
        <Footer/>
    </div>
  );
}

export default App;