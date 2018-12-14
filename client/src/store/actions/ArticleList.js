import * as actionTypes from '../actions/actionTypes'
import axios from '../../axios-article'

const selectArticle = (id) => {
	return (dispatch, getState) => {
		const articleSelected = getState().detailReducer.articleSelected;
		if (articleSelected && articleSelected._id !== id) {
			dispatch(resetSelectedArticle())
		}
	}
}
const downloadArticleList = () => {
	return async dispatch => {
		dispatch(listDownloadStart());
		try {
			const response = await axios.get('/articles');
			dispatch(listDownloadOK(response.data))
		} catch (error) {
			dispatch(listDownloadFail(error))
		}
	}
}
const resetList = () => {
	return {
		type: actionTypes.LIST_RESET
	}
}
const listDownloadOK = articleList => {
	return {
		type: actionTypes.LIST_DOWNLOAD_OK,
		articleList
	}
}
const listDownloadFail = error => {
	return {
		type: actionTypes.LIST_DOWNLOAD_FAIL,
		error: error
	}
}
const listDownloadStart = () => {
	return {
		type: actionTypes.LIST_DOWNLOAD_START
	}
}
const resetSelectedArticle = () => {
	return {
		type: actionTypes.ARTICLE_RESET
	}
}
export { downloadArticleList, selectArticle, resetList }