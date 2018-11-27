import * as actionTypes from '../actions/actionTypes'
const initialState = {
    article: null,
    updated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.EDIT_DOWNLOADED:
            const article = { ...action.article }
            return {
                ...state,
                article: article
            }
        case actionTypes.EDIT_UPDATED:
            return {
                ...state,
                updated: true
            }

        case actionTypes.EDIT_UNMOUNT:
            return {
                ...state,
                updated: false,
                article: null,
                error: null
            }
        case actionTypes.EDIT_ERROR:
            return {
                ...state,

                error: action.error
            }
        case actionTypes.ON_ENTER_TITLE: //TODO 
            const tArticle = { ...state.article, title: action.title }
            return {
                ...state,
                article: tArticle
            }
        case actionTypes.ON_ENTER_CONTENT:
            const cArticle = { ...state.article, content: action.content }
            return {
                ...state,
                article: cArticle
            }
        default: return state;

    }

}

export default reducer;
