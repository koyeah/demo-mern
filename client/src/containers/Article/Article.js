import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import ArticleDetail from './ArticleDetail/ArticleDetail'
import ArticleList from './ArticleList/ArticleList'
import ArticleNew from './ArticleNew/ArticleNew'
import ArticleEdit from './ArticleEdit/ArticleEdit';


const Article = () => (
	<div className='ui container'>
		<Navigation />
		<Switch>
			<Route exact path="/" component={ArticleList} />
			<Route exact path="/articles" component={ArticleList} />
			<Route path="/articles/new" component={ArticleEdit} />
			{/* <Route path="/articles/new" component={ArticleNew} /> */}
			<Route path="/articles/:id/edit" component={ArticleEdit} />
			<Route path="/articles/:id" component={ArticleDetail} />
			<Route render={() => <h1>Page Not Found!</h1>} />
		</Switch>
	</div>
)


export default Article;