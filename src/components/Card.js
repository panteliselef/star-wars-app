import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeWorld: ""
    }
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
  

  render () {
    const {name, homeWorld,height} = this.props;
    return (
      <div className="card-container">
        <div>
         <h2>{name}</h2> 
         <h3>{this.state.homeWorld}</h3>
         <h4>{height}</h4>
        </div>
      </div>
    );

  }
  
}
export default Card;
