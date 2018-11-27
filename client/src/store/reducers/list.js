
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    list: null, error: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIST_DOWNLOADED:
            console.log("reducer SAVE_ARTICLE_LIST!", action);
            const list = action.list.concat();
            return {
                ...state,
                list: list
            }
        case actionTypes.LIST_UNMOUNT:
            return {
                ...state,
                list: null
            }
        case actionTypes.LIST_ERROR:
        return {
            ...state,
            error: action.error
        }
        default: return state;
    }
}

export default reducer;

