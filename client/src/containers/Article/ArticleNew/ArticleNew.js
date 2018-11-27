import React, { Component } from 'react'
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

import axios from 'axios';

class ArticleNew extends Component {
    state = {
        article: { title: '', content: '' }
    }
    onContentChanged = (event) => {
        const newContent = event.target.value
        const newArticle = {
            ...this.state.article
        };
        newArticle.content = newContent;
        this.setState({ article: newArticle })
    }

    onTitleChanged = (event) => {
        console.log('onTitleChanged', this.state.article);
        const newTitle = event.target.value
        const newArticle = {
            ...this.state.article
        };
        newArticle.title = newTitle;
        this.setState({ article: newArticle })
    }

    onCreateClicked = () => {
        axios.post("/articles", { article: this.state.article })
            .then(response => {
                this.props.history.push("/articles");
            })
            .catch(err => {
                console.log("[axios.post]", err);
            })
    }
    render() {
        return (
            <div>
                <h1>Create An Article</h1>
                <form>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Title"
                            onChange={event => this.onTitleChanged(event)}
                            value={this.state.article.title} />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <FormControl
                            value={this.state.article.content}
                            onChange={event => this.onContentChanged(event)}
                            componentClass="textarea"
                            placeholder="Enter Content" />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.onCreateClicked}>Create</Button>
                </form>
            </div>
        )
    }
}

export default ArticleNew;

