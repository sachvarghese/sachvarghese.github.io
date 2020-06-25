import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import PropTypes from 'prop-types';

class Article extends Component {
    render() {
        return this.props.arts.map((art) => (
                <ArticleItem markComplete={this.props.markComplete} delArticle={this.props.delArticle} 
                key={art.id} art={art}
                />
            ));
    }
}

Article.propTypes = {
    arts: PropTypes.array.isRequired
}

export default Article;