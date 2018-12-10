import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import ArticleDetail from './containers/Article/ArticleDetail/ArticleDetail'
import ArticleList from './containers/Article/ArticleList/ArticleList'
import ArticleEdit from './containers/Article/ArticleEdit/ArticleEdit';
import ArticleNew from './containers/Article/ArticleNew/ArticleNew';

const App = () => {
	return (
		<div >
			<Navigation />
			<Switch>
				<Route exact path="/" component={ArticleList} />
				<Route exact path="/articles" component={ArticleList} />
				<Route path="/articles/new" component={ArticleNew} />
				<Route path="/articles/:id/edit" component={ArticleEdit} />
				<Route path="/articles/:id" component={ArticleDetail} />
				<Route render={() => <h1>Page Not Found!</h1>} />
			</Switch>
		</div>
	)

}

export default App;