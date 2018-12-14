import React, { Component } from 'react'
import * as actionCreators from '../../../store/actions/'

import { connect } from 'react-redux'

import ArticleContent from '../../../components/UI/ArticleContent'

class ArticleNew extends Component {
	state = {
		article: { title: '', content: '' }
	}
	onContentChanged = (event) => {
		const newContent = event.target.value
		const newArticle = {
			...this.state.article
		};
		newArticle.content = newContent;
		this.setState({ article: newArticle })
	}

	onTitleChanged = (event) => {
		const newTitle = event.target.value
		const newArticle = {
			...this.state.article
		};
		newArticle.title = newTitle;
		this.setState({ article: newArticle })
	}

	onCreateClicked = () => {
		this.props.createArticle(this.state.article)
	}
	componentDidUpdate(prevProp) {
		if (prevProp.creating) {
			if (!this.state.error) {
				this.props.history.push("/articles");
			}
		}
	}
	renderContent() {
		if (this.props.creating) { return <p>Creating</p> }
		if (this.props.error) { return <p>Error</p> }
		return (
			<ArticleContent
				edit
				article={this.state.article}
				titleHandler={this.onTitleChanged}
				contentHandler={this.onContentChanged}>
				<button className="ui primary button" onClick={this.onCreateClicked}>Create</button>
			</ArticleContent>
		)
	}
	render() {
		return (
			<div className="ui raised very padded text container segment">
				<div className="ui header">
					<h1>Create An Article</h1>
				</div>
				{this.renderContent()}
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		creating: state.newReducer.creating,
		error: state.newReducer.error
	}
}
const mapDispatchToProps = dispatch => {
	return {
		createArticle: (article) => dispatch(actionCreators.createArticle(article))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleNew);

