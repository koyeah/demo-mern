import React, { Component } from 'react'

import axios from 'axios';
import * as actionCreators from '../../../store/actions/list'

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

	onCreateClicked = async () => {
		try {
			const response = await axios.post("/articles", { article: this.state.article })
			if (response) {
				this.props.history.push("/articles");
				this.props.resetList()
			}
		} catch (error) {
			console.log("[axios.post]", error);
		}
	}
	render() {
		return (
			<div className="ui raised very padded text container segment">
				<div className="ui header">
					<h1>Create An Article</h1>
				</div>
				<ArticleContent
					edit
					article={this.state.article}
					titleHandler={this.onTitleChanged}
					contentHandler={this.onContentChanged}>
					<button className="ui primary button" onClick={this.onCreateClicked}>Create</button>
				</ArticleContent>
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		resetList: dispatch(actionCreators.resetList())
	}
}
export default connect(null, mapDispatchToProps)(ArticleNew);

