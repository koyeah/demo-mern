import React from 'react'

const ArticleContent = (props) => {
	const { article, edit, titleHandler, contentHandler } = props
	const { title, content } = article;

	if (edit) {
		return (
			<div className="ui form">
				<div className="field">
					<label>Title</label>
					<input
						type="text"
						value={props.article.title}
						onChange={titleHandler} />
				</div>
				<div className="field">
					<label>Content</label>
					<textarea
						value={content}
						onChange={contentHandler} />
				</div>
				{props.children}
			</div>
		)
	}

	// show Text
	return (
		<div className='ui container segment'>
			<h3>{title}</h3>
			<p>{content}</p>
			{props.children}
		</div>
	)
}

export default ArticleContent;