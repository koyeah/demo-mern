
import * as actionTypes from './actionTypes'
import axios from 'axios'

export const updateArticle = article => {
	return async (dispatch, getState) => {
		dispatch(articleUpdateStart());
		try {
			await axios.put("/articles/" + getState().detail.article._id, {article})
			dispatch({ type: actionTypes.LIST_RESET })
			dispatch({ type: actionTypes.ARTICLE_RESET })
			dispatch(articleUpdateOK());
		} catch (error) {
			dispatch(articleUpdateFail(error))
		}
	}			
}
export const articleUpdateReset = () => {
	return {
		type:actionTypes.ARTICLE_UPDATE_RESET
	}
}
const articleUpdateStart = () => {
	return { type: actionTypes.ARTICLE_UPDATE_START }
}
const articleUpdateOK = () => {
	return {
		type: actionTypes.ARTICLE_UPDATE_OK
	}
}
const articleUpdateFail = (error) => {
	return {
		type: actionTypes.ARTICLE_UPDATE_FAIL,
		error: error
	}
}

