import React, { Component } from 'react';
import { connect } from 'react-redux'
import ArticleContent from '../../../components/UI/ArticleContent'

import * as actionCreators from '../../../store/actions'


class ArticleDetail extends Component {

	onDeleteClicked = () => {
		this.props.deleteArticle();
	}
	onEditClicked = () => {
		this.props.history.push("/articles/" + this.props.match.params.id + "/edit");
	}
	componentDidUpdate() {
		if (!this.props.articleSelected) {

			this.props.history.push('/articles')
		}
	}
	componentDidMount() {
		if (!this.props.articleSelected) {
			this.props.downloadArticle(this.props.match.params.id);
		}
	}

	renderBody() {
		if (!this.props.articleSelected) {
			return <p>Loading...</p>
		}
		if (this.props.error) {
			return <p>Something went wrong</p>
		}
		if (this.props.deleting) {
			return <p>Deleting</p>
		}
		return (
			<ArticleContent article={this.props.articleSelected} >
				<span>
					<button className="ui red button" onClick={this.onDeleteClicked}>Delete</button>
					<button className="ui primary button" onClick={this.onEditClicked}>Edit</button>
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
		articleSelected: state.detailReducer.articleSelected,
		deleting: state.detailReducer.deleting,
		error: state.detailReducer.error
	}
}
const mapDispatchToProps = dispatch => {
	return {
		downloadArticle: id => dispatch(actionCreators.downloadArticle(id)),
		deleteArticle: () => dispatch(actionCreators.deleteArticle())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

