
import axios from '../../axios-article'

import * as actionTypes from '../actions/actionTypes'
import { resetArticle } from './ArticleEdit'
import { resetList } from './ArticleList'


const createArticleStart = () => {
	return {
		type: actionTypes.ARTICLE_CREATE_START
	}
}
const createArticleOK = () => {
	return {
		type: actionTypes.ARTICLE_CREATE_OK
	}
}
const createArticleFail = error => {
	return {
		type: actionTypes.ARTICLE_CREATE_FAIL,
		error: error
	}
}
const createArticle = article => {
	return async dispatch => {
		dispatch(createArticleStart())
		try {
			await axios.post('/articles', { article })
			dispatch(resetArticle())
			dispatch(resetList())
			dispatch(createArticleOK())
		} catch (error) {
			dispatch(createArticleFail(error))
		}
	}
}

export { createArticle }
