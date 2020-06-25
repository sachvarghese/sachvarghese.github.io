import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import ArticleInstance from './ArticleInstance';

class SearchPage extends Component {

    state = {
        substring: '',
        artVisibility: 'hidden',
        noResVisible: 'hidden'
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            artVisibility: 'hidden',
            noResVisible: 'hidden'
        }
        );
    }

    homeClick = () => {
        console.log(this.props)
        this.props.history.push('/articleview/' + this.props.match.params.id);
    }

    doArticlesExist = () => {
        console.log(this.state.substring.length);
        if(this.state.substring.length<2) {
            return false;
        }
        for(var i=0; i<this.props.articles.length; i++) {
            if(this.props.articles[i].title.includes(this.state.substring)) {
                return true;
            }
        }
        return false;
    }

    searchArticles = () => {
        console.log(this.state.substring);
        if(this.doArticlesExist()){
            this.setState({
                substring: this.state.substring,
                artVisibility: 'visible',
                noResVisible:'hidden'
        });
        }
        else {
            console.log("No");
            this.setState({
                substring: this.state.substring,
                artVisibility: 'hidden',
                noResVisible:'visible'
        });
        }
    }

    render() {
        return(
            <React.Fragment>

            <div>
            <button class="btn btn-success" style={buttonStyle} onClick={this.homeClick}> Home</button>
            <br/><br/><br/><br/>
            <label style={searchTextStyle}>Search:</label>
            <input type="text" name="substring" style={searchStyle} value={this.state.substring} onChange={this.onChange}/>
            <button class="btn btn-success" style={searchButtonStyle} onClick={this.searchArticles}> Search</button>
            <br/><br/><br/>
            </div>
            <div style={{visibility:this.state.noResVisible}}>
            <h2 style={errorStyle}>No result found</h2>
            </div>
            <div style={{visibility:this.state.artVisibility}}>
            <ArticleInstance arts={this.props.articles} substring={this.state.substring} />
            </div>
            
            </React.Fragment>
            )
        
    }
}

const buttonStyle = {
    cursor: 'pointer',
    float: 'right',
    marginRight:50
}

const searchStyle = {
    width: 200,
    height: 25,
    fontSize:12,
    fontWeight:'bold',
    marginTop: window.innerHeight/10,
    marginLeft: 20
}

const searchTextStyle = {
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    marginLeft: window.innerWidth/2.7,
    marginTop: window.innerHeight/10

}
 const searchButtonStyle = {
    cursor: 'pointer',
    marginLeft: 20
 }

 var errorStyle = {
    color:'red',
     marginLeft:window.innerWidth/2.3, 
}
export default withRouter(SearchPage);