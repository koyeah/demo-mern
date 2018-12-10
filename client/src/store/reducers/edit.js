
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	updating: false,
	isUpdated: false,
	error: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ARTICLE_UPDATE_START:
			return updateStart(state, action);
		case actionTypes.ARTICLE_UPDATE_OK:
			return updateOK(state, action);
		case actionTypes.ARTICLE_UPDATE_RESET:
			return updateReset(state, action);
		case actionTypes.ARTICLE_UPDATE_FAIL:
			return updateFail(state, action);
		default: return state;
	}
}
const updateReset = (state, action) => {
	return {
		...state,
		updating: false,
		isUpdated: false,
		error: null
	}
}
const updateStart = (state, action) => {
	return {
		...state,
		updating: true,
		isUpdated: false,
		error: null
	}
}
const updateOK = (state, action) => {
	return {
		...state,
		updating: false,
		isUpdated: true
	}
}
const updateFail = (state, action) => {
	return {
		...state,
		updating: false,
		isUpdated: false,
		error: action.error
	}
}
export default reducer;
