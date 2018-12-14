
import * as actionTypes from '../actions/actionTypes'

const initialState = {
	creating: false,
	error: null
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ARTICLE_CREATE_START:
			return {
				...state,
				creating: true

			}
		case actionTypes.ARTICLE_CREATE_OK:
			return {
				...state,
				creating: false
			}
		case actionTypes.ARTICLE_CREATE_FAIL:
			return {
				...state,
				creating: false,
				error: action.error
			}
		default: return state;
	}
}

export default reducer;
