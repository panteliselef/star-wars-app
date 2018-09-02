import React from 'react';
import Card from './Card';
import './CardList.css';

class ViewMoreButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isButtonClicked : false
    }
    this.onClick = this.onClick.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  onClick = (e) => {
    if(!this.state.isButtonClicked) {
      this.showDetails(e);
    }else {
      this.hideDetails(e);
    }
    this.setState(
      {isButtonClicked: !this.state.isButtonClicked}
    );
  }
  showDetails = (e) => {
    e.target.parentElement.parentElement.nextSibling.classList.add('visible');
  }
  hideDetails = (e) => {
    e.target.parentElement.parentElement.nextSibling.classList.remove('visible');
  }
  render() {

    return(
      <a href="#" onClick={this.onClick} className={this.state.isButtonClicked ? 'active' : null}>
        {this.props.text}
      </a>
    );

  }
  

}

export default ViewMoreButton;