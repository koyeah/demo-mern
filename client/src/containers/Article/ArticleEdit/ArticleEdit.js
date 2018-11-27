import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

import * as actionCreators from '../../../store/actions/index'
import * as actionType from '../../../store/actions/actionTypes'

import { connect } from 'react-redux'

class ArticleEdit extends Component {
    state = {
        article: null
    }
    onEnterTitle = (event) => {
        const newArticle = { ...this.state.article, title: event.target.value }
        this.setState({ article: newArticle })
    }
    onEnterContent = (event) => {
        const newArticle = { ...this.state.article, content: event.target.value }
        this.setState({ article: newArticle })
    }
    getTitleValidationState = () => {
        return this.props.article.title.length > 0 ? 'success' : 'error'
    }
    getContentValidationState = () => {
        return "error";
    }
    onSubmitClicked = (event) => {
        event.preventDefault();
        this.props.updateArticle();
    }
    componentDidMount() {
        
        this.props.getEditArticle(this.props.match.params.id )
    }
    componentWillUnmount() {
        this.props.invalidateArticle()
    }
    render() {
        let editUI = <p>Loading...</p>;
        if (this.props.article) {
            editUI = (
                <form>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.props.article.title}
                            placeholder="Enter text"
                            onChange={event => this.props.onEnterTitle(event)}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <FormControl
                            value={this.props.article.content}
                            onChange={event => this.props.onEnterContent(event)}
                            componentClass="textarea"
                            placeholder="Enter Content" />
                    </FormGroup>
                    <Button type="submit" bsStyle="primary" onClick={event => this.onSubmitClicked(event)}>Submit</Button>
                </form>
            )
        }
        if (this.props.updated) {
            editUI = <Redirect to="/articles" ></Redirect>
        }
        if( this.props.error) {
            editUI = <p>Something went wrong</p>
        }
        return (
            <div>
                <h1>Edit Article Page</h1>
                {editUI}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        updated: state.edit.updated,
        article: state.edit.article,
        error: state.edit.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        invalidateArticle: () => dispatch({ type: actionType.EDIT_UNMOUNT }),
        getEditArticle: id => dispatch(actionCreators.getEditArticle(id)),
        updateArticle: () => dispatch(actionCreators.updateArticle()),
        onEnterTitle: event => dispatch({type: actionType.ON_ENTER_TITLE, title: event.target.value}),
        onEnterContent: event => dispatch({type: actionType.ON_ENTER_CONTENT ,content: event.target.value})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);