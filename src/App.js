import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import DeleteBeer from "./Pages/DeleteBeer";
import AddBeer from "./Pages/AddBeer";
import PageNotFound from "./Pages/PageNotFound";
import AddLabelButton from "./components/Button/AddLabelButton";
import {makeStyles} from "@material-ui/core/styles";
import DeleteLabelButton from "./components/Button/DeleteLabelButton";

const useStyle = makeStyles((theme) => ({
    linkbutton: {
        textDecoration: 'none',
    },
    positionlabelbutton:{
        float: 'right',
        display: "none",
    }
    })
)

function App() {
    const classes = useStyle()
  return (
      <div className="App">
        <Router>
        <Navbar />
            <div className={classes.positionlabelbutton}>
            <Link to="/addbeer" className ={classes.linkbutton}>
                <AddLabelButton/>
            </Link>
            <Link to="/deletebeer"  className ={classes.linkbutton}>
                <DeleteLabelButton/>
            </Link>
            </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/deletebeer" exact component={DeleteBeer} />
            <Route path="/addbeer" exact component={AddBeer} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </Router>
      </div>
  )
}

export default App;
