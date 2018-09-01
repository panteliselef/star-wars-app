import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import Logo from './components/Logo';


class App extends Component {

  constructor() {
    super();
    this.state = {
      peopleList : [],
      nextPageUrl: "",
      infiniteDataLoad: false,
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
  }
  
  componentDidUpdate () {
    if(this.state.infiniteDataLoad === true) {
      this.handleScroll();
    }
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
    if (this.state.infiniteDataLoad === true) {

      var elmnt = document.getElementById("scrolling");
      var y = elmnt.scrollTop;
      var c = elmnt.scrollHeight;
      var a = elmnt.offsetHeight;
      // console.log(y,a,c);
      if(y+a === c) {
        console.log("Bottom");
        this.loadMoreUsers();
      }
    }
  }

  activateInfinteDataLoad = () => {
    this.setState({infiniteDataLoad: true});
  }


  render() {
    return (

      <React.Fragment>
      <Header/>
      <Logo/>
        <div className="App" onScroll={this.handleScroll}>
          <CardList handler={this.activateInfinteDataLoad}  people={this.state.peopleList}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
