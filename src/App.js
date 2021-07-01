import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Views/HomePage';
import Page1 from './Views/Page1';
import Page2 from './Views/Page2';
import Page3 from './Views/Page3';
import Page404 from './Views/Page404';
import Article from './Views/Article';

function App() {
    return (
        <div>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/page-1">
                        <Page1 />
                    </Route>
                    <Route path="/page-2">
                        <Page2 />
                    </Route>
                    <Route path="/page-3">
                        <Page3 />
                    </Route>
                    <Route path="/article/:articleId">
                        <Article />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
