import * as actionTypes from './actionTypes'
import axios from 'axios'



export const downloadArticleList = () => {
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
export const resetList = () => {
	return { type: actionTypes.LIST_RESET }
}
const listDownloadOK = articleList => {
	return {
		type: actionTypes.LIST_DOWNLOAD_OK,
		list: articleList
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