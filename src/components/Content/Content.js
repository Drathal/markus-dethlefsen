import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'react-async-component';
import SiteData from '../../data.json'

const getComp = (name) => asyncComponent({ resolve: () => import(`../${name}`) });
const RouteItem = ({ link, text, component }) => (<Route key={link} exact path={link} component={getComp(component)}/>)
const RouteItems = ({data}) => data.map(entry => RouteItem(entry))

export default ({data}) => (
    <main>
        <Switch>
            <RouteItems data={data}/>
        </Switch>
    </main>
);
