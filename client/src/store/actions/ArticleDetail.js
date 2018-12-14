import axios from '../../axios-article'

import * as actionTypes from '../actions/actionTypes'
import { resetList } from './ArticleList'



const deleteArticleStart = () => {
	return {
		type: actionTypes.ARTICLE_DELETE_START
	}
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
const downloadArticleStart = () => {
	return { type: actionTypes.ARTICLE_DOWNLOAD_START }
}
const downloadArticleOK = articleSelected => {
	return {
		type: actionTypes.ARTICLE_DOWNLOAD_OK,
		articleSelected
	}
}
const downloadArticleFail = error => {
	return {
		type: actionTypes.ARTICLE_DOWNLOAD_FAIL,
		error: error
	}
}
const downloadArticle = id => {
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

const deleteArticle = () => {
	return async (dispatch, getState) => {
		dispatch(deleteArticleStart());
		try {
			await axios.delete("/articles/" + getState().detailReducer.articleSelected._id);
			console.log('-----dispatch reset list-----');
			await dispatch(resetList())
			console.log('-----dispatch delete ok-----');
			dispatch(deleteArticleOK());
		} catch (error) {
			dispatch(deleteArticleFail(error));
		}
	}
}

export { downloadArticle, deleteArticle }