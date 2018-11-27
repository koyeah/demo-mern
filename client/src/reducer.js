
import {GET_ARTICLE,
    GET_ARTICLE_LIST,
    CREATE_ARTICLE,
    UPDATE_ARTICLE,
    DELETE_ARTICLE} from './action'

const initialState = {
    articleList: [],
    article: null
}

const reducer = (state = initialState, action ) {
    switch( action.type ) {
        case GET_ARTICLE_LIST: 
            return {
                ...state,
                article;:
            }
        default: return state;
    }
}