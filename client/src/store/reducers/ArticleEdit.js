
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	updating: false,
	error: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ARTICLE_UPDATE_START:
			return updateStart(state, action);
		case actionTypes.ARTICLE_UPDATE_OK:
			return updateOK(state, action);
		case actionTypes.ARTICLE_UPDATE_FAIL:
			return updateFail(state, action);
		default: return state;
	}
}

const updateStart = (state, action) => {
	return {
		...state,
		updating: true,
		error: null
	}
}
const updateOK = (state, action) => {
	return {
		...state,
		updating: false
	}
}
const updateFail = (state, action) => {
	return {
		...state,
		updating: false,
		error: action.error
	}
}
export default reducer;
