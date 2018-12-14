import React, { Component } from 'react';

import ArticleContent from '../../../components/UI/ArticleContent'

import * as actionCreators from '../../../store/actions'



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
	copyToLocalArticle= () => {
		const copyArticle = {
			title: this.props.articleSelected.title,
			content: this.props.articleSelected.content
		}
		this.setState({
			...this.state,
			localArticle: copyArticle
		})
	}
	componentDidMount() {
		if (!this.props.articleSelected) {
			return this.props.downloadArticle(this.props.match.params.id)
		} else {
			this.copyToLocalArticle();
		}
	}
	componentDidUpdate(prevProp) {
		if ( prevProp.updating && !this.props.updating && 
			!this.props.articleSelected) {
			//updating OK, redirect to top page!
			return this.props.history.push('/articles')
		} 
		if (!prevProp.articleSelected && this.props.articleSelected) {
			this.copyToLocalArticle();
		}
	}
	renderBody() {
		let articleUI = null;
		if (!this.props.articleSelected) {
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
		
		// if (this.props.isUpdated) {
		// 	updateInfoUI = <Redirect to="/articles" ></Redirect>
		// }
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
		articleSelected: state.detailReducer.articleSelected,
		updating: state.editReducer.updating,
		error: state.editReducer.error
	}
}
const mapDispatchToProps = dispatch => {
	return {
		downloadArticle: id => dispatch(actionCreators.downloadArticle(id)),
		updateArticle: (article) => dispatch(actionCreators.updateArticle(article))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);