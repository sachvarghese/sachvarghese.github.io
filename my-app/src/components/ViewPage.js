import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

class ViewPage extends Component {

    state = {
        title:'<Article does not exist>',
        content:'<Article does not exist>'
    }

    deleteClick = () => {
        this.props.delArticle(this.props.match.params.articleid);
        this.setState({
            title: '<The article has been deleted>',
            content: '<The article has been deleted>'
        });
    }

    editClick = () => {
        this.props.history.push('/editArticle/' + this.props.match.params.id + '/' + this.props.match.params.articleid);
    }

    backClick = () => {
        this.props.history.push('/searchview/' + this.props.match.params.id);
    }

    homeClick = () => {
        this.props.history.push('/articleview/' + this.props.match.params.id);
    }

    getTitle = () =>{
        console.log("got title")
        for(var i=0; i<this.props.articles.length;i++) {
            if(this.props.articles[i].id===this.props.match.params.articleid) {
                this.setState({
                    title: this.props.articles[i].title,
                    content: this.props.articles[i].content
                });
                console.log(this.props.articles[i].title)
            }
        }
    }
    
    componentDidMount = () =>{
        console.log(this.getTitle());
    }
    render() {
        return (
            <div>
            <button class="btn btn-success" style={homeStyle} onClick={this.homeClick}> Home</button>
            
            <div style={{marginLeft: (window.innerWidth/2)-centerBoxText.width/2}}>
             <input type="text" name="title" style={centerBoxText} value={this.state.title} readOnly />
             <br/>
             <textarea type="text" name="content" style={centerBoxContent} value={this.state.content} readOnly />
             <br/>
             <button class="btn btn-success" style={backBtnStyle} onClick={this.backClick}>Back</button>
             <button class="btn btn-warning" style={editBtnStyle} onClick={this.editClick}>Edit</button>
             <button class="btn btn-danger" style={deleteBtnStyle} onClick={this.deleteClick}>Delete</button>
            </div>
            </div>
        );
    }
}

const centerBoxText = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: 400,
    height: 30,
    marginTop: (window.innerHeight/10)
}

const centerBoxContent = {
    textAlign:'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 400,
    height: 400,
    marginTop: (window.innerHeight/10)-50
}

const homeStyle = {
    cursor: 'pointer',
    float: 'right',
    marginRight:50
}

const backBtnStyle = {
    width: 50,
    padding: '5px',
    marginLeft:window.innerWidth/20,
    marginTop: window.innerHeight/20,
    cursor: 'pointer'
}

const editBtnStyle = {
    width: 50,
    padding: '5px',
    marginLeft:window.innerWidth/20,
    marginTop: window.innerHeight/20,
    cursor: 'pointer'
}

const deleteBtnStyle = {
    width: 55,
    padding: '5px',
    marginLeft:window.innerWidth/20,
    marginTop: window.innerHeight/20,
    cursor: 'pointer'
}
export default withRouter(ViewPage);