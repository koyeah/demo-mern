import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import ArticleContent from '../../../components/UI/ArticleContent'

import * as editActionCreators from '../../../store/actions/edit'
import * as detailActionCreators from '../../../store/actions/detail'


import { connect } from 'react-redux'

class ArticleEdit extends Component {
	state = {
		localArticle: {}
	}

	onEnterTitle = (event) => {
		const updatedArticle = {
			...this.state.localArticle,
			title: event.target.value
		}
		this.setState({
			...this.state,
			localArticle: updatedArticle
		})
	}
	onEnterContent = (event) => {
		const updatedArticle = {
			...this.state.localArticle,
			content: event.target.value
		}
		this.setState({
			...this.state,
			localArticle: updatedArticle
		})
	}

	onSubmitClicked = (event) => {
		event.preventDefault();
		this.props.updateArticle(this.state.localArticle);
	}
	componentDidMount() {
		if (!this.props.article) {
			this.props.downloadArticle(this.props.match.params.id)
		} else {
			const copyArticle = {
				title: this.props.article.title,
				content: this.props.article.content
			}
			this.setState({
				...this.state,
				localArticle: copyArticle
			})
		}
	}
	
	renderBody() {
		let articleUI = null;
		if (!this.props.article) {
			articleUI=  <p>Loading...</p>
		}
		if (this.props.error) {
			articleUI = <p>Something went wrong</p>
		}

		articleUI =
			<ArticleContent
				edit
				article={this.state.localArticle}
				titleHandler={this.onEnterTitle}
				contentHandler={this.onEnterContent}>
				<button className="ui primary button" type="submit" onClick={event => this.onSubmitClicked(event)}>Submit</button>
			</ArticleContent>

		let updateInfoUI = null;
		if (this.props.updating) {
			updateInfoUI = <p>Updating...</p>
		}
		if (this.props.updateError) {
			updateInfoUI = <p> Update failed!</p>
		}
		if (this.props.isUpdated) {
			updateInfoUI = <Redirect to="/articles" ></Redirect>
		}
		return (
			<>
				{articleUI}
				{updateInfoUI}
			</>
		)
	}
	render() {
		return (
			<div className="ui raised very padded text container segment">
				<h1>Edit Article Page</h1>
				{this.renderBody()}
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		article: state.detail.article,
		updating: state.edit.updating,
		isUpdated: state.edit.isUpdated,
		error: state.detail.error,
		updateError: state.edit.error
	}
}
const mapDispatchToProps = dispatch => {
	return {
		downloadArticle: id => dispatch(detailActionCreators.downloadArticle(id)),
		updateArticle: (article) => dispatch(editActionCreators.updateArticle(article))
		// onEnterTitle: event => dispatch({type: actionType.ON_ENTER_TITLE, title: event.target.value}),
		// onEnterContent: event => dispatch({type: actionType.ON_ENTER_CONTENT ,content: event.target.value})
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);