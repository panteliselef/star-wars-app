import React from 'react';
import './Card.css';
import personImg from '../images/person.svg';
import ViewMoreButton from './ViewMoreButton';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeWorld: ""
    }
    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount() {
    fetch(this.props.homeWorld)
    .then(res => {
      return res.json();
    })
    .then(resData => {
      this.setState({homeWorld: resData.name})
    })
  }
  
  showDetails = (e) => {
    console.log(e.target.parentElement.parentElement.nextSibling.classList.add('visible'));
  }


  render () {
    const {name, homeWorld,height,gender,films} = this.props;
    return (
      <div className="card-container">
        <img className="person-img" src={personImg}></img>
        <div className="card-info-container">
          <div className="name">{name}</div> 
          <div className="det-preview">
            <span>
              {gender + " "}
            </span>
            <span>
              {height + "cm"}
            </span>
            {/* <a onClick={this.showDetails} href="#">{"view more"}</a> */}
            <ViewMoreButton text="View More"/>
          </div>
          {/* <div>{this.state.homeWorld}</div> */}
        </div>
        <div className="det-full">{films}</div>
      </div>
    );

  }
  
}
export default Card;
