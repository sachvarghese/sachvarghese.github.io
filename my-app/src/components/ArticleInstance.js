import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

class ArticleItem extends Component {

    onViewClick = (id) => {
        console.log(this.props);
        this.props.history.push('/viewarticle/'+ this.props.match.params.id+ '/' + id);
    }

    render() {
        return this.props.arts.filter(art => art.title.includes(this.props.substring)).map((art) => (
            <div style={artStyle}>
                {art.title}
                <button style={buttonStyle} onClick={this.onViewClick.bind(this,art.id)}>View</button>
                <br/>
                </div>
        ));
    }
    
}

const btnStyle = {
    backgroundColor:'red',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    float: 'right' ,   
}

const artStyle = {
    border: '1px solid black',
    width: window.innerWidth/2,
    backgroundColor:'lightgrey',
    padding:'20px',
    marginLeft: window.innerWidth/4,
    fontSize: 20
}

const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: 'lightgreen',
    float:'right'
}
export default withRouter(ArticleItem);