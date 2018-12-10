import * as actionTypes from './actionTypes'
import axios from 'axios'


export const downloadArticle = id => {
	return async dispatch => {
		dispatch(downloadArticleStart())
		try {
			const response = await axios.get("/articles/" + id);
			dispatch(downloadArticleOK(response.data))
		} catch (error) {
			dispatch(downloadArticleFail(error))
		}
	}
}
export const deleteArticle = () => {
	return async (dispatch, getState) => {
		dispatch(deleteArticleStart());
		try {
			await axios.delete("/articles/" + getState().detail.article._id)
			dispatch({ type: actionTypes.LIST_RESET })
			dispatch(deleteArticleOK());
		} catch (error) {
			dispatch(deleteArticleFail(error));
		}
	}
}
export const resetArticle = () => {
	return {
		type: actionTypes.ARTICLE_RESET
	}
}
const downloadArticleStart = () => {
	return { type: actionTypes.ARTICLE_DOWNLOAD_START }
}
const downloadArticleOK = article => {
	return {
		type: actionTypes.ARTICLE_DOWNLOAD_OK,
		article: article
	}
}
const downloadArticleFail = error => {
	return {
		type: actionTypes.ARTICLE_DOWNLOAD_FAIL,
		error: error
	}
}
const deleteArticleStart = () => {
	return { type: actionTypes.ARTICLE_DELETE_START }
}
const deleteArticleOK = () => {
	return {
		type: actionTypes.ARTICLE_DELETE_OK
	}
}
const deleteArticleFail = (err) => {
	return {
		type: actionTypes.ARTICLE_DELETE_FAIL,
		error: err
	}
}