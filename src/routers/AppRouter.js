import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRouter';
import YourMarketPlaceHeader from '../components/YourMarketPlaceHeader';
import DashboardPage from '../components/DashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'


const AppRouter = () => {

    return  (
        <BrowserRouter>
            <div>
                <YourMarketPlaceHeader>
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute path="/" component={DashboardPage} exact={true} />
                        <PrivateRoute path="/help" component={HelpPage} />
                        <PrivateRoute component={NotFoundPage} />
                    </Switch>
                </YourMarketPlaceHeader>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
