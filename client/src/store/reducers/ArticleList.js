
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	articleList: null,
	error: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LIST_DOWNLOAD_START: return downloadStart(state, action);
		case actionTypes.LIST_DOWNLOAD_OK: return downloadOK(state, action);
		case actionTypes.LIST_DOWNLOAD_FAIL: return downloadFail(state, action);
		case actionTypes.LIST_RESET: return resetList(state, action);
		default: return state;
	}
}
const downloadStart = (state, action) => {
	return {
		...state,
	}
}
const downloadOK = (state, action) => {
	const articleList = action.articleList.concat();
	return {
		...state,
		articleList
	}
}
const downloadFail = (state, action) => {
	return {
		...state,
		error: action.error
	}
}
const resetList = (state, action) => {
	return {
		...state,
		articleList: null,
		error: null
	}
}
export default reducer;