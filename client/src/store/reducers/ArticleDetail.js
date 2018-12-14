
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	articleSelected: null,
	deleting: false,
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
		error: null
	}
}
const articleDownloadOK = (state, action) => {
	const articleSelected = { ...action.articleSelected }
	return {
		...state,
		articleSelected
	}
}
const articleDownloadFail = (state, action) => {
	return {
		...state,
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
		articleSelected: null
	}
}
const articleDeleteFail = (state, action) => {
	return {
		...state,
		deleting: false,
		error: action.error
	}
}
const resetArticle = (state, action) => {
	return {
		...state,
		articleSelected: null
	}
}
export default reducer;
