import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import SearchPage from './components/search/SearchPage';
import EditPage from './components/search/EditPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={SearchPage} />
        <Route path="/person/edit/" component={EditPage} />
        <Route path="/person/edit/:id" component={EditPage} />
    </Route>
);