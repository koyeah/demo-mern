import React, { Component } from 'react'

import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import * as actionCreators from '../../../store/actions/index'
import * as actionTypes from '../../../store/actions/actionTypes'



class ArticleList extends Component {
    state = {
        downloading: true
    }

    onArticleClicked = (id) => {
        this.props.history.push("/articles/" + id);
    }

    componentDidMount() {
        this.props.getArticleList()
        
    }
    componentWillUnmount() {
        //make sure we get the latest list next mounting cycle
        this.props.invalidateArticleList()
    }

    render() {

       
        let displayUI = <div>Loading</div>
        if (this.props.articles) {
                        const articles = this.props.articles.map((a, idx) => {
                return (
                    <tr key={a._id} onClick={() => this.onArticleClicked(a._id)}>
                        <td>{idx + 1}</td>
                        <td>{a.title}</td>
                    </tr>
                )
            })
            displayUI = (
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles}
                    </tbody>
                </Table>
            )
        }
        if (this.props.error) {
            displayUI = <p>Something went wrong...</p>
        }
        return (
            <div>
                <h1> Article List Page</h1>
                {displayUI}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //outsouce articles to reducer hereafter
        articles: state.list.list,
        error: state.list.error
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getArticleList: () => dispatch(actionCreators.downloadArticleList()),
        invalidateArticleList: () => dispatch({ type: actionTypes.LIST_UNMOUNT })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);