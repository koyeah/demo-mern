import * as actionTypes from './actionTypes'
import axios from 'axios'

const saveArticleList = articleList => {
    return {
        type: actionTypes.LIST_DOWNLOADED,
        list: articleList
    }
}
const serverFail = error => {
    return {
        type: actionTypes.LIST_ERROR,
        error: error
    }
}
export const downloadArticleList = () => {
    console.log('[downloadArticleList] ');
    return (dispatch, getState) => {
        axios.get('/articles')
            .then(response => {
                const articleList = response.data;

                dispatch(saveArticleList(articleList))
            })
            .catch(err => {
                dispatch( serverFail(err) )
                console.log("[downloadArticleList]] axios", err);
            })
    }
}

