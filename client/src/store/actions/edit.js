import * as actionTypes from './actionTypes'
import axios from 'axios'




const saveEditArticle = (article) => {
    return {
        type: actionTypes.EDIT_DOWNLOADED,
        article: article
    }
}
const serverFail = err => {
    return {
        type: actionTypes.EDIT_ERROR,
        error: err
    }
}
export const getEditArticle = id => {
    return dispatch => {
        axios.get("/articles/" + id)
            .then(response => {
                const article = response.data
                console.log('[getArticle]', "[GET]", "OK", article);
                dispatch(saveEditArticle(article))
            })
            .catch(err => {
                dispatch(serverFail(err))
                console.log('[getArticle]', "[GET]", "ERR", err);
            })
    }
}

const articleUpdated = () => {
    return {
        type: actionTypes.EDIT_UPDATED

    }
}

export const updateArticle = (article) => {
    return (dispatch, getState) => {

        axios.put("/articles/" + getState().edit.article._id, { article: getState().edit.article })
            .then(response => {
                dispatch(articleUpdated());
            })
            .catch(err => {
                dispatch(serverFail(err))

                console.log('[deleteArticle]', "[DELETE]", "ERR", err);
            })
    }
}


