import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionCreators from '../../../store/actions/index'
import * as actionType from '../../../store/actions/actionTypes'

class ArticleDetail extends Component {


	onDeleteClicked = () => {
		this.props.deleteArticle();
	}

	onEditClicked = () => {
		this.props.history.push("/articles/" + this.props.match.params.id + "/edit");
	}
	componentDidMount() {
		this.props.getDetailArticle(this.props.match.params.id);
	}
	componentWillUnmount() {
		this.props.invalidateArticle();
	}
	render() {
		let displayUI = <p>Loading...</p>;
		if (this.props.article) {
			displayUI = (
				<Jumbotron>
					<h3> {this.props.article.title}</h3>
					<p>
						{this.props.article.content}
					</p>
					<span>
						<Button bsStyle="danger" onClick={this.onDeleteClicked}>Delete</Button>
						<Button bsStyle="warning" onClick={this.onEditClicked}>Edit</Button>
					</span>
				</Jumbotron>
			)
		}
		if (this.props.deleted) {
			displayUI = <Redirect to="/articles" />
		}
		if( this.props.error) {
			displayUI = <p>Something went wrong</p>

		}
		return (
			<div>
				<h1>Article Detail Page</h1>
				{displayUI}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		article: state.detail.article,
		deleted: state.detail.deleted,
		error: state.detail.error
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getDetailArticle: id => dispatch(actionCreators.getDetailArticle(id)),
		invalidateArticle: () => dispatch({ type: actionType.DETAIL_UNMOUNT }),
		deleteArticle: () => dispatch(actionCreators.deleteArticle())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

