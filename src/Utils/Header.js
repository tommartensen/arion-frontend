import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppBar, IconButton} from "material-ui";
import IconHome from "material-ui/svg-icons/action/home";
import IconArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import config from "../config/config";

class Header extends Component {
    static buildAppBar(isHome) {
        let iconElementLeft;

        if (isHome) {
            iconElementLeft = <IconHome/>;
        } else {
            iconElementLeft = <IconArrowBack/>;
        }

        return (
            <AppBar
                title={<span>{config.projectName}</span>}
                iconElementLeft={<IconButton href="/">{iconElementLeft}</IconButton>}
            />
        );
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        render={() => Header.buildAppBar(true)}/>
                    <Route
                        path="/details/:hierarchyId"
                        render={() => Header.buildAppBar(false)}/>
                    <Route
                        path="*"
                        render={() => Header.buildAppBar(false)}/>
                </Switch>
            </Router>
        );
    }
}

export default Header;