import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Article from './components/Article';
import './App.css';
import { render } from '@testing-library/react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import AddPage from './components/AddPage';
import {v4 as uuid} from 'uuid';
import ViewPage from './components/ViewPage';
import EditPage from './components/EditPage';


class App extends Component {

  state = {
    articles: [
      {
        id: uuid(),
        title:'The boy who cried wolf',
        content: 'This is the story of the boy who cried wolf. ierghero wefpwi'
      },
      {
        id: uuid(),
        title:'Five men',
        content: 'Five men were walking down the street one day. the end.'
      },
      {
        id: uuid(),
        title:'23 and me',
        content: 'Human chromosomes are extremely complex and the scope is insufficient here.'
      },
      {
        id: uuid(),
        title:'The boy and his mother',
        content: 'Not an article, just testing sample substring articles.'
      }
    ],

    users: [
      {
        id: 'A-8811',
        password: 'igloo123'
      },
      {
        id: 'A-9988',
        password: 'impala11'
      }

    ]
  }

  markComplete = (id) =>{
    console.log(id)
    this.setState( {arts: this.state.arts.map(art=> {
      if(id===art.id) {
        art.completed = !art.completed;
      }
      return art;
    }) 
  });
  }

  delArticle = (id) => {
    console.log(id)
    this.setState(
      {
        articles: [...this.state.articles.filter(article => article.id!==id)]
      }
    );
    console.log(this.state.arts)
  }

  addArticle = (title,content) => {
    const newArticle = {
      id: uuid(),
      title,
      content
    }
    this.setState(
      {
        articles:[...this.state.articles, newArticle],
        users: [...this.state.users]
      }
    )
  }

  editArticle = (title, content, id) => {
    this.setState( {articles: this.state.articles.map(article=> {
      if(id===article.id) {
        article.title = title;
        article.content = content;
      }
      return article;
    }) 
  });
  }

  render() {
    return (
      /*
      <div className="App">
        <h1 className="Main">Welcome</h1>
        <Article markComplete={this.markComplete} arts={this.state.arts}
          delArticle={this.delArticle}
        />
      </div>
      */
     <Router>
       <Route exact path="/" render={props=>(<React.Fragment>
        <LoginPage users={this.state.users} />
       </React.Fragment> )}/>

        <Route path="/articleview/:id" render={props=>(<React.Fragment>
        <HomePage {...props}/>
       </React.Fragment> )}/>

       <Route path="/searchview/:id" render={props=>(<React.Fragment>
        <SearchPage {...props} articles={this.state.articles}/>
       </React.Fragment> )}/>

        <Route path="/addview/:id" render={props=>(<React.Fragment>
        <AddPage {...props} addArticle={this.addArticle}/>
        </React.Fragment> )}/>
          
        <Route path="/viewarticle/:id/:articleid" render={props=>(<React.Fragment>
        <ViewPage {...props} articles={this.state.articles} delArticle={this.delArticle}/>
        </React.Fragment> )}/>
        
        <Route path="/editarticle/:id/:articleid" render={props=>(<React.Fragment>
        <EditPage {...props} articles={this.state.articles} editArticle={this.editArticle}/>
        </React.Fragment> )}/>
        
        </Router>

        

    );
  }
}
export default App;
