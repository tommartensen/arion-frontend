import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "./App";
import ListView from "./ListView/ListView";
import DetailView from "./DetailView/DetailView";
import NotFound from "./Utils/NotFound";
import Header from "./Utils/Header";
import {Container} from "react-grid-system";

ReactDOM.render(
    <Router>
        <App>
            <div>
                <Header/>
                <Container style={{marginTop: "30px"}}>
                    <Switch>
                        <Route
                            exact path="/"
                            component={ListView}/>
                        <Route
                            path="/details/:hierarchyId"
                            component={DetailView}/>
                        <Route
                            path="*"
                            component={NotFound}/>
                    </Switch>
                </Container>
            </div>
        </App>
    </Router>,
    document.getElementById('root')
);