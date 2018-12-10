import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as listActionCreators from '../../../store/actions/list'
import * as detailActionCreators from '../../../store/actions/detail'


class ArticleList extends Component {
	onArticleClicked = id => {
		if (this.props.selectedArticle &&
			this.props.selectedArticle._id !== id) {
			this.props.resetArticle();
		}
		this.props.history.push("/articles/" + id);
	}
	componentDidMount() {
		if (!this.props.articles) {
			this.props.downloadArticleList()
		}
	}
	renderBody() {
		if (!this.props.articles) {
			return <p>Loading</p>
		}
		if (this.props.error) {
			return <p>Something went wrong...</p>
		}
		const articles = this.props.articles.map((a, idx) => {
			return (
				<tr key={a._id} onClick={() => this.onArticleClicked(a._id)}>
					<td >{idx + 1}</td>
					<td >{a.title}</td>
				</tr>
			)
		})
		return (
			<table className="ui celled table">
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{articles}
				</tbody>
			</table>
		)
	}

	render() {
		return (
			<div className="ui raised very padded text container segment">
				<h1> Article List Page</h1>
				{this.renderBody()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		articles: state.list.list,
		selectedArticle: state.detail.article,
		error: state.list.error
	};
}
const mapDispatchToProps = dispatch => {
	return {
		downloadArticleList: () => dispatch(listActionCreators.downloadArticleList()),
		resetArticle: () => dispatch(detailActionCreators.resetArticle())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);