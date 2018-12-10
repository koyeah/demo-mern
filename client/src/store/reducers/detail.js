
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	article: null,
	deleting: false,
	isDeleted: false,
	error: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ARTICLE_DOWNLOAD_START:
			return articleDownloadStart(state, action);
		case actionTypes.ARTICLE_DOWNLOAD_OK:
			return articleDownloadOK(state, action);
		case actionTypes.ARTICLE_DOWNLOAD_FAIL:
			return articleDownloadFail(state, action);
		case actionTypes.ARTICLE_DELETE_START:
			return articleDeleteStart(state, action)
		case actionTypes.ARTICLE_DELETE_OK:
			return articleDeleteOK(state, action)
		case actionTypes.ARTICLE_DELETE_FAIL:
			return articleDeleteFail(state, action)
		case actionTypes.ARTICLE_RESET:
			return resetArticle(state, action)
		default: return state;
	}
}
const articleDownloadStart = (state, action) => {
	return {
		...state,
		initializing: true,
		deleting: false,
		isDeleted: false
	}
}
const articleDownloadOK = (state, action) => {
	const article = { ...action.article }
	return {
		...state,
		initializing: false,
		article: article,
		error: null
	}
}
const articleDownloadFail = (state, action) => {
	return {
		...state,
		initializing: false,
		error: action.error
	}
}
const articleDeleteStart = (state, action) => {
	return {
		...state,
		deleting: true,
		error: null
	}
}
const articleDeleteOK = (state, action) => {
	return {
		...state,
		deleting: false,
		isDeleted: true,
		article: null,
		error: null
	}
}
const articleDeleteFail = (state, action) => {
	return {
		...state,
		deleting: false,
		isDeleted: false,
		error: action.error
	}
}
const resetArticle = (state, action) => {
	return {
		...state,
		article: null,
		deleting: false,
		isDeleted: false,
		error: null
	}
}
export default reducer;
