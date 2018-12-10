
import * as actionTypes from '../actions/actionTypes'


const initialState = {
	list: null,
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
	const list = action.list.concat();
	return {
		...state,
		list: list,
	}
}
const downloadFail = (state, action) => {
	return {
		...state,
		error: action.error,
	}
}
const resetList = (state, action) => {
	return {
		...state,
		list: null,
		error: null
	}
}
export default reducer;