import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'

class ArticleList extends Component {
	onArticleClicked = id => {
		this.props.selectArticle(id)
		this.props.history.push("/articles/" + id);
	}
	componentDidMount() {
		if (!this.props.articleList) {
			this.props.downloadArticleList()
		}
	}
	renderBody() {
		if (!this.props.articleList) {
			return <p>Loading</p>
		}
		if (this.props.error) {
			return <p>Something went wrong...</p>
		}
		const articles = this.props.articleList.map((a, idx) => {
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
		articleList: state.listReducer.articleList,
		error: state.listReducer.error
	};
}
const mapDispatchToProps = dispatch => {
	return {
		downloadArticleList: () => dispatch(actionCreators.downloadArticleList()),
		selectArticle: (id) => dispatch(actionCreators.selectArticle(id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);