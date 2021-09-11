import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Home from "../pages/Home"
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <header className="header">
                    <div className="logo">
                        <h1>TRAVEL AGENCY</h1>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/highlights">HIGHLIGHTS</Link></li>
                            <li><Link to="/sports">SPORTS</Link></li>
                            <li><Link to="/packages">PACKAGES</Link></li>
                            <li><Link to="/festivals">FESTIVALS</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
