import Home from "./components/Home"
import Webdesign from "./components/Webdesign"
import About from "./components/About"
import Location from "./components/Location"
import Contact from "./components/Contact"
import Appdesign from "./components/Appdesign"
import GraphicDesign from "./components/GraphicDesign"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/webdesign" component={Webdesign}/>
        <Route exact path="/appdesign" component={Appdesign}/>
        <Route exact path="/graphicdesign" component={GraphicDesign}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/location" component={Location}/>
        <Route exact path="/contact" component={Contact}/>


        
      </Switch>
    </Router>
  );
}

export default App;
