import * as actionTypes from '../actions/actionTypes'
import { resetList } from './ArticleList'
import axios from '../../axios-article'



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
const updateArticle = article => {
	return async (dispatch, getState) => {
		dispatch(articleUpdateStart());
		try {
			await axios.put("/articles/" + getState().detailReducer.articleSelected._id, { article });
			dispatch(resetArticle())
			dispatch(resetList())
			dispatch(articleUpdateOK());
		} catch (error) {
			dispatch(articleUpdateFail(error))
		}
	}
}

const resetArticle = () => {
	return {
		type: actionTypes.ARTICLE_RESET
	}
}
export { resetArticle, updateArticle }