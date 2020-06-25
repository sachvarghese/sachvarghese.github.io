import React, { Component } from 'react';

class ArticleItem extends Component {

    getStyle = () => {
        return {
        backgroundColor:'blue', 
        padding:'10px',
        textDecoration: this.props.art.completed ? 'line-through':'none'}
    }

    

    render() {
        const {id,title} = this.props.art;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/> {" "}
                {title}
                <button style={btnStyle} onClick={this.props.delArticle.bind(this,id)}>X</button>
                </p>
            </div>
            );
    }
    
}

const btnStyle = {
    backgroundColor:'red',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    float: 'right'    
}

export default ArticleItem;