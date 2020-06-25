import React, { Component } from 'react';
import {questions} from './Questions';

class HomePage extends Component {
    count = Math.floor(1+(Math.random()*(questions.length-2)));

    state = {
        score:0,
        clickNum: 0,
        position: questions[this.count].position,
        answer: questions[this.count].answer,
        givenAns:[]
    }

    onClick = (e) => {
        console.log((e.clientX-400)/83);
        console.log((e.clientY-20)/83);
        if(this.state.clickNum===0) {
            this.setState({
                score: this.state.score,
                clickNum: 1,
                position: this.state.position,
                answer: this.state.answer,
                givenAns:[(e.clientX-400)/83,(e.clientY-20)/83]
            });
        }
        else if(this.state.clickNum===1) {
            
            console.log(this.state.answer, this.state.givenAns)

            if(this.state.givenAns[0]>this.state.answer[0] && this.state.givenAns[0]<this.state.answer[0]+1 && this.state.givenAns[1]>this.state.answer[1] && this.state.givenAns[1]<this.state.answer[1]+1 && (e.clientX-400)/83>this.state.answer[2] && (e.clientX-400)/83<this.state.answer[2]+1 && (e.clientY-20)/83>this.state.answer[3] && (e.clientY-20)/83<this.state.answer[3]+1) {
                    console.log("YES");
                    this.count =Math.floor( 1+(Math.random()*(questions.length-2)));
                  
                    this.setState({
                        score: this.state.score+1,
                        clickNum: 0,
                        position: questions[this.count].position,
                        answer: questions[this.count].answer,
                        givenAns:[]
                    });
            }
            else {
                console.log(questions.length-1);
                this.count = Math.floor(1+(Math.random()*(questions.length-2)));
               
                this.setState({
                    score:this.state.score-1,
                    clickNum: 0,
                    position: questions[this.count].position,
                    answer: questions[this.count].answer,
                    givenAns:[]
                });
            }
            
    }
    }
    getImg = (n,m) => {
        return {
            width:80,height:80, position: 'absolute', top:20+((n-1)*83), left:400+((m-1)*83)
        }
    }

    getPiece = (piece) => {
        return "https://images.chesscomfiles.com/chess-themes/pieces/neo/146/" + piece + ".png";
        
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        );
    }



    
    render() {
        var items =[], n=1, m=1, peice = ''
        for(var i=0;i<this.state.position.length;i++) {
            if(this.state.position[i]==='/') {
                    n = n + 1;
                    m = 1;
            }
            else if(this.state.position[i]==='1') {
                m = m+1;
            }
            else if(this.state.position[i]==='2') {
                m = m+2;
            }
            else if(this.state.position[i]==='3') {
                m = m+3;
            }
            else if(this.state.position[i]==='4') {
                m = m+4;
            }
            else if(this.state.position[i]==='5') {
                m = m+5;
            }
            else if(this.state.position[i]==='6') {
                m = m+6;
            }
            else if(this.state.position[i]==='7') {
                m = m+7;
            }
            else if(this.state.position[i]==='8') {
                m = m+8;
            }
            else if(this.state.position[i]==='P') {
                peice = 'wp';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='N') {
                peice = 'wn';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='B') {
                peice = 'wb';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='R') {
                peice = 'wr';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='Q') {
                peice = 'wq';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='K') {
                peice = 'wk';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;

            }
            else if(this.state.position[i]==='k') {
                peice = 'bk';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='p') {
                peice = 'bp';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='n') {
                peice = 'bn';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='b') {
                peice = 'bb';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='r') {
                peice = 'br';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;
            }
            else if(this.state.position[i]==='q') {
                peice = 'bq';
                items.push(<img src={this.getPiece(peice)} style={this.getImg(n,m)}/>)
                m = m+1;

            }

        }

        return (
           <div style={parent} onClick={this.onClick}>

                <img src={ require('../images/board.gif') } style={img1} />
                {items}
                <br/>
               <h3 style={score}> SCORE: {this.state.score}</h3>
            </div>
        );
    }
}

const parent = {
    position: 'relative',
    top: 0,
    left: 0,
  }
  const img1 = {
    marginLeft:window.innerWidth/4,width:700,height:700, zIndex: -1,position: 'relative', cursor:'pointer'
  }

  const score = {
      marginLeft: 700, color:'red'
  }
export default HomePage;