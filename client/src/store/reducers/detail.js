import * as actionTypes from '../actions/actionTypes'

const initialState = {
    article: null,
    deleted: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.DETAIL_DOWNLOADED:
            const article = { ...action.article }
            return {
                ...state,
                article: article
            }
        case actionTypes.DETAIL_DELETE:
            return {
                ...state,
                deleted: true,
                article: null
            }
        case actionTypes.DETAIL_UNMOUNT:
            return {
                ...state,
                error: null,
                deleted: false,
                article: null
            }
        case actionTypes.DETAIL_ERROR:
            
            return {
                ...state,
                error: action.error
            }
        default: return state;

    }

}

export default reducer;
