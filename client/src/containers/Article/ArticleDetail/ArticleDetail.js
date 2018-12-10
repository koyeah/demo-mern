import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ArticleContent from '../../../components/UI/ArticleContent'
import * as detailActionCreators from '../../../store/actions/detail'
import * as editActionCreators from '../../../store/actions/edit'


class ArticleDetail extends Component {

	onDeleteClicked = () => {
		this.props.deleteArticle();
	}
	onEditClicked = () => {
		this.props.articleUpdateReset()
		this.props.history.push("/articles/" + this.props.match.params.id + "/edit");
	}
	componentDidMount() {
		if (!this.props.article) {
			this.props.downloadArticle(this.props.match.params.id);
		}
	}

	renderBody() {

		if (this.props.isDeleted) {
			return <Redirect to="/articles" />
		} 
		if (!this.props.article) {
			return <p>Loading...</p>
		}
		if (this.props.error) {
			return <p>Something went wrong</p>
		}
		if (this.props.deleting) {
			return <p>Deleting</p>
		}

		return (
			<ArticleContent article={this.props.article} >
				<span>
					<button className="ui red button" onClick={this.onDeleteClicked}>Delete</button>
					<button className="ui primary button"onClick={this.onEditClicked}>Edit</button>
				</span>
			</ArticleContent>
		)
	}
	render() {
		return (
			<div className="ui raised very padded text container segment">
				<h1 className="ui header">Article Detail Page</h1>
				{this.renderBody()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		article: state.detail.article,
		deleting: state.detail.deleting,
		isDeleted: state.detail.isDeleted,
		error: state.detail.error
	}
}
const mapDispatchToProps = dispatch => {
	return {
		downloadArticle: id => dispatch(detailActionCreators.downloadArticle(id)),
		// invalidateArticle: () => dispatch({ type: actionType.DETAIL_UNMOUNT }),
		deleteArticle: () => dispatch(detailActionCreators.deleteArticle()),
		articleUpdateReset: () => dispatch(editActionCreators.articleUpdateReset())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

