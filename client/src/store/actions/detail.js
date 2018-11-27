import * as actionTypes from './actionTypes'
import axios from 'axios'



const serverError = err => {
    return {
        type:actionTypes.DETAIL_ERROR,
        error: err
    }
}
const saveDetailArticle = (article) => {
    return {
        type: actionTypes.DETAIL_DOWNLOADED,
        article: article
    }
}
export const getDetailArticle = id => {
    return dispatch => {
        axios.get("/articles/" + id)
            .then(response => {
                const article = response.data
                console.log('[getArticle]', "[GET]", "OK", article);
                dispatch(saveDetailArticle(article))
            })
            .catch(err => {
                dispatch(serverError(err))
            })
    }
}
const articleDeleted = () => {
    return {
        type: actionTypes.DETAIL_DELETE
    }
}

export const deleteArticle = () => {
    return (dispatch, getState) => {

        axios.delete("/articles/" + getState().detail.article._id)
            .then(response => {
                dispatch(articleDeleted());
            })
            .catch(err => {
                console.log('[deleteArticle]', "[DELETE]", "ERR", err);
            })
    }
}
