import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Scroll from './components/Scroll';

import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      peopleList : [],
      nextPageUrl: ""
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.loadMoreUsers = this.loadMoreUsers.bind(this);

    // this.doSome = this.doSome.bind();

  }

  componentDidMount () {
    fetch("https://swapi.co/api/people")
    .then( response => {
      return response.json()
    })
    .then( data => {
      this.setState({peopleList: data.results,nextPageUrl: data.next});
    })


    ReactDOM.findDOMNode(this).addEventListener('scroll',this.handleScroll)
  }

  
  loadMoreUsers = () => {
    fetch(this.state.nextPageUrl)
    .then(response => response.json())
    .then(data => {
      console.log("previousPeopleList", this.state.peopleList);
      let newArr = this.state.peopleList.concat(data.results);
      this.setState({nextPageUrl: data.next,
                     peopleList: newArr})
      console.log(data)
      console.log("currentPeopleList", this.state.peopleList);
    })
  }
  handleScroll = (e) => {
    var elmnt = document.getElementById("scrolling");
    var y = elmnt.scrollTop;
    var c = elmnt.scrollHeight;
    var a = elmnt.offsetHeight;
    var isloading = false;
    console.log(y,a,c);
    if(y+a === c) {
      e.stopPropagation();
      console.log("Bottom");
      isloading=true;
      this.loadMoreUsers();
      isloading=false

    }
  }


  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <div className="App-container">
          <h1 className="">Star Wars App</h1>
        </div>
        
        <CardList people={this.state.peopleList}/>

        
      </div>
    );
  }
}

export default App;
